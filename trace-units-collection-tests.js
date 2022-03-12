// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by trace-units-collection.js.
import { name as packageName } from "meteor/trace-units-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('trace-units-collection - example', function (test) {
  test.equal(packageName, "trace-units-collection");
});
