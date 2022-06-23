import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService, IAPICore } from '@core/services/apicore/api.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'ecommerce-application' }
})
export class ApiComponent implements OnInit {

  public contentHeader: object;
  public developer = []
  public quality = []
  public production = []

  public shopSidebarToggle = false;
  public shopSidebarReset = false;
  public gridViewRef = false;
  public products;
  public wishlist;
  public cartList;
  public page = 1;
  public pageSize = 9;
  public searchText = '';
  prod = [
    {
      id: 1,
      name: 'VicTsing Wireless Mouse,',
      slug: 'vic-tsing-wireless-mouse-1',
      description:
        'After thousands of samples of palm data, we designed this ergonomic mouse. The laptop mouse has a streamlined arc and thumb rest to help reduce the stress caused by prolonged use of the laptop mouse.',
      brand: 'VicTsing',
      price: 10.99,
      image: 'assets/images/pages/eCommerce/27.png',
      hasFreeShipping: true,
      rating: 3
    },
    {
      id: 2,
      name: 'Bose Frames Tenor - Rectangular Polarized, Bluetooth Audio Sunglasses',
      slug: 'bose-frames-tenor-rectangular-polarized-bluetooth-audio-sunglasses-2',
      description:
        'Redesigned for luxury — Thoughtfully refined and strikingly elegant, the latest Bose sunglasses blend enhanced features and designs for an elevated way to listen',
      brand: 'Bose',
      price: 249.0,
      image: 'assets/images/pages/eCommerce/26.png',
      hasFreeShipping: false,
      rating: 4
    },
    {
      id: 3,
      name: 'Willful Smart Watch for Men Women 2020,',
      slug: 'willful-smart-watch-for-men-women-2020-3',
      description:
        'Are you looking for a smart watch, which can not only easily keep tracking of your steps, calories, heart rate and sleep quality, but also keep you informed of incoming calls.',
      brand: 'Willful',
      price: 29.99,
      image: 'assets/images/pages/eCommerce/25.png',
      hasFreeShipping: true,
      rating: 5
    },
    {
      id: 4,
      name: 'Ronyes Unisex College Bag Bookbags for Women',
      slug: 'ronyes-unisex-college-bag-bookbags-for-women-4',
      description:
        'Made of high quality water-resistant material, padded and adjustable shoulder straps, external USB with built-in charging cable offers a convenient charging',
      brand: 'Ronyes',
      price: 23.99,
      image: 'assets/images/pages/eCommerce/24.png',
      hasFreeShipping: true,
      rating: 2
    },
    {
      id: 5,
      name: 'Toshiba Canvio Advance 2TB Portable External Hard Drive',
      slug: 'toshiba-canvio-advance-2-tb-portable-external-hard-drive-5',
      description: 'Up to 3TB of storage capacity to store your growing files and content',
      brand: 'Toshiba',
      price: 69.99,
      image: 'assets/images/pages/eCommerce/23.png',
      hasFreeShipping: true,
      rating: 2
    },
    {
      id: 6,
      name: 'Tile Pro - High Performance Bluetooth Tracker',
      slug: 'tile-pro-high-performance-bluetooth-tracker-6',
      description:
        'FIND KEYS, BAGS & MORE -- Pro is our high-performance finder ideal for keys, backpacks, luggage or any other items you want to keep track of. The easy-to-use finder and free app work with iOS and Android.',
      brand: 'Tile',
      price: 29.99,
      image: 'assets/images/pages/eCommerce/22.png',
      hasFreeShipping: false,
      rating: 4
    },
    {
      id: 7,
      name: 'Bugani M90 Portable Bluetooth Speaker',
      slug: 'bugani-m90-portable-bluetooth-speaker-7',
      description:
        'Bluetooth Speakers-The M90 Bluetooth speaker uses the latest Bluetooth 5.0 technology and the latest Bluetooth ATS chip, Connecting over Bluetooth in seconds to iPhone, iPad, Smart-phones, Tablets, Windows, and other Bluetooth devices.',
      brand: 'Bugani',
      price: 56.0,
      image: 'assets/images/pages/eCommerce/21.png',
      hasFreeShipping: false,
      rating: 3
    },
    {
      id: 8,
      name: 'PlayStation 4 Console',
      slug: 'play-station-4-console-8',
      description:
        'All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.',
      brand: 'Sony',
      price: 339.95,
      image: 'assets/images/pages/eCommerce/20.png',
      hasFreeShipping: false,
      rating: 4
    },
    {
      id: 9,
      name: 'Giotto 32oz Leakproof BPA Free Drinking Water',
      slug: 'giotto-32oz-leakproof-bpa-free-drinking-water-9',
      description:
        'With unique inspirational quote and time markers on it,this water bottle is great for measuring your daily intake of water,reminding you stay hydrated and drink enough water throughout the day.A must have for any fitness goals including weight loss,appetite control and overall health.',
      brand: '3M',
      price: 16.99,
      image: 'assets/images/pages/eCommerce/19.png',
      hasFreeShipping: true,
      rating: 4
    },
    {
      id: 10,
      name: 'Oculus Quest All-in-one VR',
      slug: 'oculus-quest-all-in-one-vr-10',
      description:
        'All-in-one VR: No PC. No wires. No limits. Oculus quest is an all-in-one gaming system built for virtual reality. Now you can play almost anywhere with just a VR headset and controllers. Oculus touch controllers: arm yourself with the award-winning Oculus touch controllers. Your slashes, throws and grab appear in VR with intuitive, realistic Precision, transporting your hands and gestures right into the game',
      brand: 'Oculus',
      price: 645.0,
      image: 'assets/images/pages/eCommerce/18.png',
      hasFreeShipping: false,
      rating: 1
    },
    {
      id: 11,
      name: 'Handbags for Women Large Designer bag',
      slug: 'handbags-for-women-large-designer-bag-11',
      description:
        'Classic Hobo Purse: Top zipper closure, with 2 side zipper pockets design and elegant tassels decoration, fashionable and practical handbags for women, perfect for shopping, dating, travel and business',
      brand: 'Hobo',
      price: 39.99,
      image: 'assets/images/pages/eCommerce/17.png',
      hasFreeShipping: true,
      rating: 3
    },
    {
      id: 12,
      name: 'Adidas Mens Tech Response Shoes',
      slug: 'adidas-mens-tech-response-shoes-12',
      description:
        'Comfort + performance.  Designed with materials that are durable, lightweight and extremely comfortable. Core performance delivers the perfect mix of fit, style and all-around performance.',
      brand: 'Adidas',
      price: 54.59,
      image: 'assets/images/pages/eCommerce/16.png',
      hasFreeShipping: false,
      rating: 5
    },
    {
      id: 13,
      name: 'Laptop Bag',
      slug: 'laptop-bag-13',
      description:
        'TSA FRIENDLY- A separate DIGI SMART compartment can hold 15.6 inch Laptop as well as 15 inch, 14 inch Macbook, 12.9 inch iPad, and tech accessories like charger for quick TSA checkpoint when traveling',
      brand: 'TAS',
      price: 29.99,
      image: 'assets/images/pages/eCommerce/15.png',
      hasFreeShipping: true,
      rating: 5
    },
    {
      id: 14,
      name: 'Wireless Charger 5W Max',
      slug: 'wireless-charger-5-w-max-14',
      description:
        'Charge with case: transmits charging power directly through protective cases. Rubber/plastic/TPU cases under 5 mm thickness . Do not use any magnetic and metal attachments or cards, or it will prevent charging.',
      brand: '3M',
      price: 10.83,
      image: 'assets/images/pages/eCommerce/14.png',
      hasFreeShipping: true,
      rating: 3
    }
  ];

  constructor(
    private apiService: ApiService,
  ) { }


    /**
   * Update to List View
   */
     listView() {
      this.gridViewRef = false;
    }
  
    /**
     * Update to Grid View
     */
    gridView() {
      this.gridViewRef = true;
    }

      /**
   * Sort Product
   */
  sortProduct(sortParam) {
    // this._ecommerceService.sortProduct(sortParam);
    console.info(sortParam);
  }

  async ListarApis() {
    this.developer = []
    this.quality = []
    this.production = []
    await this.apiService.Listar().subscribe(
      (data) => {
        data.forEach(e => {
          switch (e.entorno) {
            case "desarrollo":
              this.developer.push(e)
              break;
              case "calidad":
                this.quality.push(e)
                break;
                case "produccion":
                  this.production.push(e)
                  break;
                  default:
                    break;
                  }
                });
                
      },
      (error) => {
        console.error(error)
      }
    );
  }

  ngOnInit(): void {
    this.ListarApis()
    this.products = this.developer;

    this.contentHeader = {
      headerTitle: 'Herramientas',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'APIRESTFULL',
            isLink: true,
            link: '/'
          },
          {
            name: 'Lista de APIS',
            isLink: false
          }
        ]
      }
    }
  }

}
