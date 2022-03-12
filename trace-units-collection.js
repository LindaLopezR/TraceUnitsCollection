import { Mongo } from 'meteor/mongo';

class TraceUnitsCollection extends Mongo.Collection {

}

export const TraceUnits = new TraceUnitsCollection('traceUnits');
TraceUnits.attachBehaviour('timestampable');
