import { expect } from "chai";

import { FakeApp } from "../src/fakeApp";

import { MemoryDataStorage } from './mocks/memoryDataStorage';
import { Fake } from "../src/entities/fake";
import { Poster } from "../src/entities/interfaces/poster";

describe("FakeApp Object", () => {
  let dataStorage = new MemoryDataStorage();
  let app = new FakeApp(dataStorage);
  let poster: Poster = {  
    name: "Fernando",
    number: "+55611912345678"
  }
  let poster2: Poster = {  
    name: "Milena",
    number: "+5561900000000"
  }

  beforeEach(() => {
    //reset all
    dataStorage = new MemoryDataStorage();
    app = new FakeApp(dataStorage);
  })
  
  it("should be created", () => {
    expect(app).to.be.not.null;
  });

  it("should add fake", async () => {
    let fake = new Fake(poster, new Date(), "http://www.google.com");
    await app.create(fake);
  });

  it("should get fakes with no filter", async () => {
    let fake = new Fake(poster, new Date(), "http://www.google.com");
    let creationResult = await app.create(fake);

    let queryResults = await app.getMany();

    expect(queryResults.success).to.be.true;
    expect(queryResults.payload).to.exist;
    expect(queryResults.payload.length).to.equal(1);
  });

  it("should get fakes with filters - poster", async () => {
    let fake1 = new Fake(poster, new Date(), "http://www.google.com");
    let fake2 = new Fake(poster2, new Date(), "http://www.google.com");
    
    await app.create(fake1);
    await app.create(fake2);

    let queryResults = await app.getMany({ poster });

    expect(queryResults.success).to.be.true;
    expect(queryResults.payload).to.exist;
    expect(queryResults.payload.length).to.equal(1);
    expect(queryResults.payload[0].poster).to.equal(poster);
  });

  it("should get fakes with filters - date", async () => {
    let fake1 = new Fake(poster, new Date(2020, 2, 29), "http://www.google.com");
    let fake2 = new Fake(poster2, new Date(2020, 2, 30), "http://www.google.com");
    let fake3 = new Fake(poster2, new Date(2020, 2, 31), "http://www.google.com");
    
    await app.create(fake1);
    await app.create(fake2);
    await app.create(fake3);

    let queryResults = await app.getMany({ date:  new Date(2020, 2, 30) });

    expect(queryResults.success).to.be.true;
    expect(queryResults.payload).to.exist;
    expect(queryResults.payload.length).to.equal(1);
    expect(queryResults.payload[0].poster).to.equal(poster2);
  });

  it("should get fakes with filters - url", async () => {
    let fake1 = new Fake(poster, new Date(2020, 2, 29), "http://www.google.com");
    let fake2 = new Fake(poster2, new Date(2020, 2, 30), "http://www.google.com");
    let fake3 = new Fake(poster2, new Date(2020, 2, 31), "http://www.google.com");
    
    await app.create(fake1);
    await app.create(fake2);
    await app.create(fake3);

    let queryResults = await app.getMany({ verificationUrl:  "http://www.google.com" });

    expect(queryResults.success).to.be.true;
    expect(queryResults.payload).to.exist;
    expect(queryResults.payload.length).to.equal(3);
    expect(queryResults.payload[0].poster).to.equal(poster);
  });


});
