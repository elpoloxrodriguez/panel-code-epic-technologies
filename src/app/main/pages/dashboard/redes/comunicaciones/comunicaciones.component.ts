import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { CoreConfigService } from '@core/services/config.service';



@Component({
  selector: 'app-comunicaciones',
  templateUrl: './comunicaciones.component.html',
  styleUrls: ['./comunicaciones.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComunicacionesComponent implements OnInit {

  public invoices = [
    {
      id: 5018,
      issuedDate: '29 Feb 2020',
      client: {
        address: '4735 Kristie Islands Apt. 259',
        company: 'Chapman-Schneider LLC',
        companyEmail: 'baldwinjoel@washington.com',
        country: 'Cocos (Keeling) Islands',
        contact: '(670) 409-3703',
        name: 'Randy Rich'
      },
      service: 'UI/UX Design & Development',
      total: 2483,
      avatar: 'assets/images/avatars/5-small.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: '10 Jul 2019'
    },
    {
      id: 5019,
      issuedDate: '07 Aug 2019',
      client: {
        address: '92218 Andrew Radial',
        company: 'Mcclure, Hernandez and Simon Ltd',
        companyEmail: 'psmith@morris.info',
        country: 'Macao',
        contact: '(646) 263-0257',
        name: 'Mrs. Jodi Chapman'
      },
      service: 'Unlimited Extended License',
      total: 2825,
      avatar: 'assets/images/avatars/8-small.png',
      invoiceStatus: 'Partial Payment',
      balance: '-$459',
      dueDate: '14 Oct 2019'
    },
    {
      id: 5020,
      issuedDate: '10 May 2019',
      client: {
        address: '2342 Michelle Valley',
        company: 'Hamilton PLC and Sons',
        companyEmail: 'lori06@morse.com',
        country: 'Somalia',
        contact: '(751) 213-4288',
        name: 'Steven Myers'
      },
      service: 'Unlimited Extended License',
      total: 2029,
      avatar: 'assets/images/avatars/4-small.png',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: '28 Mar 2019'
    },
    {
      id: 5021,
      issuedDate: '02 Apr 2019',
      client: {
        address: '16039 Brittany Terrace Apt. 128',
        company: 'Silva-Reeves LLC',
        companyEmail: 'zpearson@miller.com',
        country: 'Slovakia (Slovak Republic)',
        contact: '(655) 649-7872',
        name: 'Charles Alexander'
      },
      service: 'Software Development',
      total: 3208,
      avatar: '',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: '06 Sep 2019'
    },
    {
      id: 5022,
      issuedDate: '02 May 2019',
      client: {
        address: '37856 Olsen Lakes Apt. 852',
        company: 'Solis LLC Ltd',
        companyEmail: 'strongpenny@young.net',
        country: 'Brazil',
        contact: '(402) 935-0735',
        name: 'Elizabeth Jones'
      },
      service: 'Software Development',
      total: 3077,
      avatar: '',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: '09 May 2019'
    },
    {
      id: 5023,
      issuedDate: '23 Mar 2020',
      client: {
        address: '11489 Griffin Plaza Apt. 927',
        company: 'Munoz-Peters and Sons',
        companyEmail: 'carrietorres@acosta.com',
        country: 'Argentina',
        contact: '(915) 448-6271',
        name: 'Heidi Walton'
      },
      service: 'Software Development',
      total: 5578,
      avatar: 'assets/images/avatars/9-small.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: '23 Jul 2019'
    },
    {
      id: 5024,
      issuedDate: '28 Sep 2019',
      client: {
        address: '276 Michael Gardens Apt. 004',
        company: 'Shea, Velez and Garcia LLC',
        companyEmail: 'zjohnson@nichols-powers.com',
        country: 'Philippines',
        contact: '(817) 700-2984',
        name: 'Christopher Allen'
      },
      service: 'Software Development',
      total: 2787,
      avatar: 'assets/images/avatars/1-small.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: '25 Sep 2019'
    },
    {
      id: 5025,
      issuedDate: '21 Feb 2020',
      client: {
        address: '633 Bell Well Apt. 057',
        company: 'Adams, Simmons and Brown Group',
        companyEmail: 'kayla09@thomas.com',
        country: 'Martinique',
        contact: '(266) 611-9482',
        name: 'Joseph Oliver'
      },
      service: 'UI/UX Design & Development',
      total: 5591,
      avatar: '',
      invoiceStatus: 'Downloaded',
      balance: 0,
      dueDate: '07 Jun 2019'
    },
    {
      id: 5026,
      issuedDate: '24 May 2019',
      client: {
        address: '1068 Lopez Fall',
        company: 'Williams-Lawrence and Sons',
        companyEmail: 'melvindavis@allen.info',
        country: 'Mexico',
        contact: '(739) 745-9728',
        name: 'Megan Roberts'
      },
      service: 'Template Customization',
      total: 2783,
      avatar: 'assets/images/avatars/6-small.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: '22 Oct 2019'
    },
    {
      id: 5027,
      issuedDate: '13 Jan 2020',
      client: {
        address: '86691 Mackenzie Light Suite 568',
        company: 'Deleon Inc LLC',
        companyEmail: 'gjordan@fernandez-coleman.com',
        country: 'Costa Rica',
        contact: '(682) 804-6506',
        name: 'Mary Garcia'
      },
      service: 'Template Customization',
      total: 2719,
      avatar: '',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: '04 Feb 2020'
    },
    {
      id: 5028,
      issuedDate: '18 May 2019',
      client: {
        address: '86580 Sarah Bridge',
        company: 'Farmer, Johnson and Anderson Group',
        companyEmail: 'robertscott@garcia.com',
        country: 'Cameroon',
        contact: '(775) 366-0411',
        name: 'Crystal Mays'
      },
      service: 'Template Customization',
      total: 3325,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: '$361',
      dueDate: '02 Mar 2020'
    },
    {
      id: 5029,
      issuedDate: '29 Oct 2019',
      client: {
        address: '49709 Edwin Ports Apt. 353',
        company: 'Sherman-Johnson PLC',
        companyEmail: 'desiree61@kelly.com',
        country: 'Macedonia',
        contact: '(510) 536-6029',
        name: 'Nicholas Tanner'
      },
      service: 'Template Customization',
      total: 3851,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '25 Aug 2019'
    },
    {
      id: 5030,
      issuedDate: '07 Apr 2019',
      client: {
        address: '3856 Mathis Squares Apt. 584',
        company: 'Byrd LLC PLC',
        companyEmail: 'jeffrey25@martinez-hodge.com',
        country: 'Congo',
        contact: '(253) 230-4657',
        name: 'Mr. Justin Richardson'
      },
      service: 'Template Customization',
      total: 5565,
      avatar: '',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: '06 Mar 2020'
    },
    {
      id: 5031,
      issuedDate: '21 Aug 2019',
      client: {
        address: '141 Adrian Ridge Suite 550',
        company: 'Stone-Zimmerman Group',
        companyEmail: 'john77@anderson.net',
        country: 'Falkland Islands (Malvinas)',
        contact: '(612) 546-3485',
        name: 'Jennifer Summers'
      },
      service: 'Template Customization',
      total: 3313,
      avatar: 'assets/images/avatars/3-small.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: '09 Jun 2019'
    },
    {
      id: 5032,
      issuedDate: '31 May 2019',
      client: {
        address: '01871 Kristy Square',
        company: 'Yang, Hansen and Hart PLC',
        companyEmail: 'ywagner@jones.com',
        country: 'Germany',
        contact: '(203) 601-8603',
        name: 'Richard Payne'
      },
      service: 'Template Customization',
      total: 5181,
      avatar: '',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: '22 Oct 2019'
    },
    {
      id: 5033,
      issuedDate: '12 Jul 2019',
      client: {
        address: '075 Smith Views',
        company: 'Jenkins-Rosales Inc',
        companyEmail: 'calvin07@joseph-edwards.org',
        country: 'Colombia',
        contact: '(895) 401-4255',
        name: 'Lori Wells'
      },
      service: 'Template Customization',
      total: 2869,
      avatar: 'assets/images/avatars/1-small.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: '22 Mar 2020'
    },
    {
      id: 5034,
      issuedDate: '10 Jul 2019',
      client: {
        address: '2577 Pearson Overpass Apt. 314',
        company: 'Mason-Reed PLC',
        companyEmail: 'eric47@george-castillo.com',
        country: 'Paraguay',
        contact: '(602) 336-9806',
        name: 'Tammy Sanchez'
      },
      service: 'Unlimited Extended License',
      total: 4836,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '22 Oct 2019'
    },
    {
      id: 5035,
      issuedDate: '20 Jul 2019',
      client: {
        address: '1770 Sandra Mountains Suite 636',
        company: 'Foster-Pham PLC',
        companyEmail: 'jamesjoel@chapman.net',
        country: 'Western Sahara',
        contact: '(936) 550-1638',
        name: 'Dana Carey'
      },
      service: 'UI/UX Design & Development',
      total: 4263,
      avatar: '',
      invoiceStatus: 'Draft',
      balance: '$762',
      dueDate: '12 Jun 2019'
    },
    {
      id: 5036,
      issuedDate: '19 Apr 2019',
      client: {
        address: '78083 Laura Pines',
        company: 'Richardson and Sons LLC',
        companyEmail: 'pwillis@cross.org',
        country: 'Bhutan',
        contact: '(687) 660-2473',
        name: 'Andrew Burns'
      },
      service: 'Unlimited Extended License',
      total: 3171,
      avatar: 'assets/images/avatars/9-small.png',
      invoiceStatus: 'Paid',
      balance: '-$205',
      dueDate: '25 Sep 2019'
    }
  ];

    // public
    public data: any;
    public selectedOption = 10;
    public ColumnMode = ColumnMode;
    public selectStatus: any = [
      { name: 'All', value: '' },
      { name: 'Downloaded', value: 'Downloaded' },
      { name: 'Draft', value: 'Draft' },
      { name: 'Paid', value: 'Paid' },
      { name: 'Partial Payment', value: 'Partial Payment' },
      { name: 'Past Due', value: 'Past Due' },
      { name: 'Sent', value: 'Sent' }
    ];
  
    public selectedStatus = [];
    public searchValue = '';
  
    // decorator
    @ViewChild(DatatableComponent) table: DatatableComponent;
  
    // private
    private tempData = [];
    private _unsubscribeAll: Subject<any>;
    public rows;
    public tempFilterData;
    public previousStatusFilter = '';

  public contentHeader: object
  
  constructor(
    private _coreConfigService: CoreConfigService
  ) { this._unsubscribeAll = new Subject();}

  /**
   * filterUpdate
   *
   * @param event
   */
   filterUpdate(event) {
    // Reset ng-select on search
    this.selectedStatus = this.selectStatus[0];

    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.client.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * Filter By Roles
   *
   * @param event
   */
  filterByStatus(event) {
    const filter = event ? event.value : '';
    this.previousStatusFilter = filter;
    this.tempFilterData = this.filterRows(filter);
    this.rows = this.tempFilterData;
  }

  /**
   * Filter Rows
   *
   * @param statusFilter
   */
  filterRows(statusFilter): any[] {
    // Reset search on select change
    this.searchValue = '';

    statusFilter = statusFilter.toLowerCase();

    return this.tempData.filter(row => {
      const isPartialNameMatch = row.invoiceStatus.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
      return isPartialNameMatch;
    });
  }

  ngOnInit(): void {
        // Subscribe config change
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
          // If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
          if (config.layout.animation === 'zoomIn') {
            setTimeout(() => {
                this.data = this.invoices;
                this.rows = this.data;
                this.tempData = this.rows;
                this.tempFilterData = this.rows;
            }, 450);
          } else {
              this.data = this.invoices;
              this.rows = this.data;
              this.tempData = this.rows;
              this.tempFilterData = this.rows;
          }
        });
        
    this.contentHeader = {
      headerTitle: 'Redes',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Comunicaciones',
            isLink: true,
            link: '/'
          },
          {
            name: 'Principal',
            isLink: false
          }
        ]
      }
    }
  }

  /**
   * On destroy
   */
   ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
