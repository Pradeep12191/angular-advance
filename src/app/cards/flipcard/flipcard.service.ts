import { Injectable } from '@angular/core';
import { FlipcardComponent } from './flipcard.component';

@Injectable()
export class FlipcardService {
    public activeFlipcard: FlipcardComponent;
}
