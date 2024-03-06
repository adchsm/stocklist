import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StockResponse } from '../models/stocklist.models';
import { mockStockResponse } from '../test/stocklist.mock';
import { StocklistService } from './stocklist.service';

describe('StocklistService', () => {
  let service: StocklistService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StocklistService],
    });

    service = TestBed.inject(StocklistService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch stock', () => {
    const response: StockResponse = { ...mockStockResponse };

    service.getStock().subscribe((response) => {
      expect(response).toEqual(response);
    });

    const req = httpTestingController.expectOne(`${service['baseUrl']}/stock`);
    expect(req.request.method).toBe('GET');

    req.flush(response);
  });
});
