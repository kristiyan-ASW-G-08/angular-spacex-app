import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { APIService } from "./api.service";

describe("APIService", () => {
  let httpTestingController: HttpTestingController;
  let service: APIService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIService],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(APIService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  it("should be created", () => {
    const service: APIService = TestBed.get(APIService);
    expect(service).toBeTruthy();
    const mockData = { name: "MockData" };
    const urlExtension = "rockets";
    service.get(urlExtension);
    const req = httpTestingController.expectOne(
      `https://api.spacexdata.com/v3/${urlExtension}`
    );

    expect(req.request.method).toEqual("GET");
  });
});
