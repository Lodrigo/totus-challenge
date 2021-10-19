import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IHotelsData } from 'src/app/models/hotels-data-model';

@Injectable({
    providedIn: 'root'
})
export class HotelsHttpService {
    hotels: IHotelsData[]

    constructor() { }

    private _hotelsData = new BehaviorSubject<IHotelsData[]>(
        [
            {
                id: 1,
                title: 'Golden Tulip',
                description: `Golden Tulip é uma cadeia originalmente holandesa de hotéis e resorts.
                Em todo o mundo existem mais de 240 hotéis Golden Tulip espalhadas por 45 países.`
            },
            {
                id: 2,
                title: 'Fabris',
                description: `O Hotel Fabris conta com mais de 54 anos de história, se firmando como um 
                dos hotéis mais tradicionais de Nova Friburgo. Nossos apartamentos unem o charme e requinte do 
                clássico com toques de modernidade e tecnologia para uma experiência sem igual`
            },
            {
                id: 3,
                title: 'Emporiu Acapulco',
                description: `O Emporio Acapulco está localizado à beira-mar de Acapulco, em frente ao 
                Shopping Center Galerias Diana. A propriedade oferece spa, 3 piscinas ao ar livre e acesso
                à praia. Venha conhecer onde a turma do chaves filmou 3 episódios.`
            }
        ]
    )

    filterHotels(filter: string): any {
        this.hotels = []
        this._hotelsData.subscribe(res => {
            res.forEach(element => {
                if (element.title.includes(filter) == true){
                    this.hotels.push(element)
                }
            });
        })

        return this.hotels
    }
}