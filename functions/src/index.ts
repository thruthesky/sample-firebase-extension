import { initializeApp } from "firebase-admin";
import { EventContext, database, logger } from "firebase-functions/v1";

initializeApp();

// Listens for new messages added to /messages/{pushId}/original and creates an
// uppercase version of the message to /messages/{pushId}/uppercase
// for all databases in 'us-central1'
export const makeuppercase = database
  .ref("/messages/{pushId}/uppercase")
  .onCreate(async (snapshot: database.DataSnapshot, context: EventContext<{
    pushId: string;
  }>) => {
    // Grab the current value of what was written to the Realtime Database.
    const original = snapshot.val();



    // Convert it to upper case.
    logger.log("Uppercasing", context.params.pushId, original);
    const uppercase = original.toUpperCase();

    // Setting an "uppercase" sibling in the Realtime Database.
    const upperRef = snapshot.ref.parent!.child("upper");
    await upperRef.set(uppercase);
  });

