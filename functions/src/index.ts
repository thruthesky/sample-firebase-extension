/*
 * This template contains a HTTP function that responds
 * with a greeting when called
 *
 * Reference PARAMETERS in your functions code with:
 * `process.env.<parameter-name>`
 * Learn more about building extensions in the docs:
 * https://firebase.google.com/docs/extensions/publishers
 */

import * as functions from "firebase-functions";

exports.greetTheWorld = functions.https.onRequest(
  (req: functions.Request, res: functions.Response) => {
    // Here we reference a user-provided parameter
    // (its value is provided by the user during installation)
    // 사용자가 입력한 파라메타 값 GREETING 이, 설치를 할 때 전달이되어져 온다. 실행될때 마다 값이 전달되어져 온다?
    const consumerProvidedGreeting = process.env.GREETING;

    // And here we reference an auto-populated parameter
    // (its value is provided by Firebase after installation)
    // 파이어베이스 자동으로 제공하는 파라메타 값 EXT_INSTANCE_ID. 이 값은 설치 후에, 제공된다.
    const instanceId = process.env.EXT_INSTANCE_ID;

    const greeting = `${consumerProvidedGreeting} everyone 234 from ${instanceId}`;

    res.send(greeting);
  });
