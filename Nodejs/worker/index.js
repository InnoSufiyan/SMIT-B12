import {Worker} from 'bullmq'


async function mockSendEmail(payload) {
  const { from, to, subject, body } = payload;
  return new Promise((resolve, reject) => {
    console.log(`Sending Email to ${to}....`);
    setTimeout(() => resolve(1), 2 * 1000);
  });
}



const emailWorker = new Worker('email-queue', async (job) => {
  const data = job.data;
  console.log('Job Received: ', job.id);

  await mockSendEmail({
    from: data.from,
    to: data.to,
    subject: data.subject,
    body: data.body
  });
}, {
  connection: {
    host: REDIS_HOST,
    port: REDIS_PORT,
    username: "default",
    password: REDIS_PASSWORD,
  },
  limiter: {
    max: 5,
    duration: 60 * 1000
  }
});

console.log("=====>> working successfully")

emailWorker.on('completed', job => {
  console.log(`${job.id} has completed!`);
});

emailWorker.on('failed', (job, err) => {
  console.log(`${job.id} has failed with ${err.message}`);
});