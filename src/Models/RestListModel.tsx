import {MenuHeadList, MenuItemList, IMenuDetailsSingleApi, ImyCart, MenuItemModifierList} from './restDetailModel'

  export interface PolygonList {
      PolygonID: number;
      PolygonName: string;
  }

  export interface IGetAddressList {
      PolygonList: PolygonList[];
      StatusCode: number;
      Status: string;
  }
  export interface IGetHDAddressList {
    AddressId: number;
    CustomerId: number;
    Isdefault: number;
    CompanyName: string;
    FlatNo_HouseNo: string;
    Apartment_LocalityName: string;
    Address: string;
    LocationId: number;
    LocationName: string;
    CityId: number;
    CityName: string;
    PostCode: number;
    DeliveryArea: string;
    Status?;
}
export interface ICustomerId {
  CustomerId: number;
  CustomerName: string;
  Mobile: string;
  EmailID: string;
  CustomerImage: string;
  CustomerCity: string;
  RestaurantID?;
  RestaurantName?;
  IsRestaurant?;
  VerificationStatus?;
  Message?;
}


  export interface IGetHDMenuItemList{
    PropPubMenuHeadCode: string;
    PropMenuItemCode: string;
    PropPubMenuItemDescription: string;
    PropPubMenuItemlineDescription: string;
    PropPubIncomeHeadCode: string;
    PropPubImagePath: string;
    PropPubVegNonVeg: string;
    PropPubRate: number;
    PropPubQuantityDeciaml: string;
    Status?;
}
export interface IGetMenuItemDetails {
  PropTotalDiscount: number;
  PropDeliveryChanges: number;
  PropMessageCode: string;
  PropPubMessage: string;
  PropTotalAmount: number;
  PropTotalTax: number;
  Status?;
}

//GetHDMenuHeadList
  export interface IMenuHeadList {
      PropPubModifierLinked: string;
      PropPubMenuHeadCode: string;
      PropPubPopularMenuHeadCode?;
      PropPubMenuHeadDescription: string;
      PropPubTaxType: string;
      PropDeciamlAllowed: string;
      Status?;
  }



  export interface RestaurantDeliveryList0 {
      IsDeliver: number;
      RestaurantId: number;
      AccountId: string;
      GroupId: string;
      RestaurantName: string;
      RestaurantLogo: string;
      Cuisines: string;
      Location: string;
      City: string;
      MinOrder: string;
      MinTime: string;
      IsRecentOrder: number;
      TotalPledge: number;
      Distance: string;
      DeliveryFromTime: string;
      DeliveryToTime: string;
      FeedbackFacility: number;
      MorningDeliveryFromTime: string;
      MorningDeliveryToTime: string;
      EveningDeliveryFromTime: string;
      EveningDeliveryToTime: string;
  }



    export interface CityList {
        CityId: number;
        CityName: string;
    }

    export interface LocationList {
        CityId: number;
        LocationId: number;
        LocationName: string;
    }

    export interface RestaurantDeliveryList {
        IsDeliver: number;
        RestaurantId: number;
        AccountId: string;
        GroupId: string;
        RestaurantName: string;
        RestaurantLogo: string;
        Cuisines: string;
        Location: string;
        City: string;
        MinOrder: string;
        MinTime: string;
        IsRecentOrder: number;
        TotalPledge: number;
        Distance: string;
        DeliveryFromTime: string;
        DeliveryToTime: string;
        FeedbackFacility: number;
        MorningDeliveryFromTime: string;
        MorningDeliveryToTime: string;
        EveningDeliveryFromTime: string;
        EveningDeliveryToTime: string;
        OpeningTime: string;
        ClosingTime: string;
        MinDeliveryTime: number;
        HomeDeliveryPickTime: string;
        LocationId: number;
    }

    export interface RestaurantList {
        RestaurantDeliveryList: RestaurantDeliveryList[];
        PolygonName: string;
        PolygonId: number;
        StatusCode: number;
        Status: string;
    }

    export interface IhomeDetails {
        StrRestaurantLogo: string;
        StrRestaurantBackImage: string;
        IntRestaurantTheme: number;
        StrRestaurantContactUs: string;
        StrRestaurantAboutUs: string;
        StrRestaurantMobileBackImage: string; 
        StrRestaurantClosedMsg: string; 
        StrRestaurantDeliveryMsg: string; 
        StrAccountDisplayMsg: string;
        StrDisplayText: string;
        CityList: CityList[];
        LocationList: LocationList[];
        RestaurantList: RestaurantList[];
        MyPOSMenuDetail?: IMyPOSMenuDetail;
    }

    export interface IMyPOSMenuDetail extends IMenuDetailsSingleApi {
      IntMyPOSPUSHFlavourCode?:        number;
      StrMyPOSPUSHFlavourDescription?: string;
  }

  export interface ICheckRestaurantsPayments{
    PaymentType: string;
    IsActive: number;
    Status?;
}
export interface ICheckTotalAmount {
  PropTotalDiscount?:    number;
    PropDeliveryChanges?:  number;
    PropMessageCode?:      string;
    PropPubMessage?:       string;
    PropTotalAmount?:      number;
    PropTotalTax?:         number;
    Status?:               null;
    PropGrandTotalAmount?: number;
    PropPubOrderCharges?:  any[];
}

  export interface IGetRestuarantList {
      RestaurantDeliveryList: RestaurantDeliveryList[];
      PolygonName: string;
      PolygonId: number;
      StatusCode: number;
      Status: string;
  }




export interface IAllRestaurantDish {
  
  RestaurantId: number;
  RestaurantName: string;
  RestaurantDishId: number;
  RestaurantDishName: string;
  LocationName: string;
  RestaurantCity: string;
  Distance: number;
  Votes: number;
  DishRank: number;
  Latitude: string;
  Longitude: string;
  DishImage: string;
  PromoFlag: number;
  FmUsers: number;
  NoOfCoupons: number;
  TotalPledge: number;
  DishType: number;
  Friends: number;
  DishSequence: number;
  Cuisines: string;
  AccountId: number;
  ChainOfRest: number;
}

export interface ImageAdvertisement {
  Id: number;
  RestaurantId: number;
  ImageName: string;
  TimePeriod: number;
  RankOrder: number;
  Message?;
  AccountId: number;
  ChainOfRest: number;
  LastFlag: number;
}

export interface SuggestedImage {
  SerialNumber: number;
  ImageSize: number;
  SuggestionImage: string;
  LinkedPage: string;
  ParaMeters: string;
  Message?;
  PageAction: string;
  RestaurantId: number;
  AccountId: number;
  Flag: number;
  SuggestionId: number;
  SearchType: number;
}

export interface NotificationCount {
  NotificationCount: number;
  CountOfCoupons: number;
  CountOfChat: number;
  CountOfBookings: number;
  CountOfFriends: number;
}

export interface NoOfRestaurants {
  NoOfRestaurants: number;
}

export interface IRestList {
  AllRestaurantDishes: IAllRestaurantDish[];
  ImageAdvertisement: ImageAdvertisement[];
  SuggestedImages: SuggestedImage[];
  PopUpImages;
  NotificationCount: NotificationCount;
  Message?;
  NoOfRestaurants: NoOfRestaurants;
}
//_______________________ router model __________________________

export interface History {
  length: number;
  action: string;
  location: string;
  createHref: string;
  push: string;
  replace: string;
  go: string;
  goBack: string;
  goForward: string;
  block: string;
  listen: string;
}

export interface Location {
  pathname: string;
  search: string;
  hash: string;
}

export interface Match {
  path: string;
  url: string;
  params: string;
  isExact: boolean;
}

export interface routerProps {
  text: string;
  path: string;
  history: History;
  location: Location;
  match: Match;
}

export interface AllRestaurantDish {
  RestaurantId: number;
  RestaurantName?;
  RestaurantDishId: number;
  RestaurantDishName?;
  LocationName?;
  RestaurantCity?;
  Distance: number;
  Votes: number;
  DishRank: number;
  Latitude?;
  Longitude?;
  DishImage?;
  PromoFlag: number;
  FmUsers: number;
  NoOfCoupons: number;
  TotalPledge: number;
  DishType: number;
  Friends: number;
  DishSequence: number;
  Cuisines?;
  AccountId: number;
  ChainOfRest: number;
}

export interface ImageAdvertisement {
  Id: number;
  RestaurantId: number;
  ImageName: string;
  TimePeriod: number;
  RankOrder: number;
  Message?;
  AccountId: number;
  ChainOfRest: number;
  LastFlag: number;
}

export interface PopUpImage {
  Id: number;
  RestaurantId: number;
  ImageName?;
  TimePeriod: number;
  RankOrder: number;
  Message?;
  AccountId: number;
  ChainOfRest: number;
  AdvDetails?;
  AdvName?;
  AdvSize: number;
  LastFlag: number;
}

export interface NotificationCount {
  NotificationCount: number;
  CountOfCoupons: number;
  CountOfChat: number;
  CountOfBookings: number;
  CountOfFriends: number;
}

export interface NoOfRestaurants {
  NoOfRestaurants: number;
}

export interface ILandingPageBanner {
  AllRestaurantDishes: AllRestaurantDish[];
  ImageAdvertisement: ImageAdvertisement[];
  SuggestedImages?;
  PopUpImages: PopUpImage[];
  NotificationCount: NotificationCount;
  Message?;
  NoOfRestaurants: NoOfRestaurants;
}




//_______________________ Reducer __________________________
export interface IrestData {
  isLoading?:                  boolean;
  minLoading?:                 boolean;
  isError?:                    boolean;
  data?:                       any;
  status?:                     number;
  cartTotal?:                     number;
  statusText?:                 string;
  Strloclatitude?:             string;
  strLocLongitude?:            string;
  errorMsg?:                   string;
  errorObj?:                   ErrorObj;
  homeDetails?:                IhomeDetails;
  selectObj?:                  SelectObj;
  restObj?:                    RestaurantDeliveryList;
  myCart?:                     ImyCart[];
  formatedAdd?:                any;
  totalAmountObj?:             ICheckTotalAmount;
  restList?:                   IRestList;
  menuDetails?:                MenuDetails;
  updatedMenuItemList?:        any;
  insertOrderDetails?:         InsertOrderDetails;
  PropMenuItemDetails?:        string;
  PropCounterSaleOrderDetail?: string;
  landingPageBanner?: ILandingPageBanner;
  orderDetails?: ILandingPageBanner;
  custObj?: Icustomer;
  orderStatus?: IOrderStatus[];
  tableList:ITableList[];
}

export interface InsertOrderDetails {
  Message?:       string;
  MessageCode?:   string;
  PaymentFlag?:   boolean;
  TransactionId?: null;
}

export interface Icustomer {
  CustomerCity?:       string;
  CustomerId?:         number;
  CustomerImage?:      string;
  CustomerName?:       string;
  Name?:               string;
  EmailID?:            string;
  IsRestaurant?:       null;
  Message?:            null;
  Mobile?:             string;
  RestaurantID?:       null;
  RestaurantName?:     null;
  VerificationStatus?: null;
}
export interface InewCustomer {
  CouponMessage?: string;
  CustomerId?: number;
  Message?:  string;
  Mobile?:  string;
  Name?:  string;
}

export interface InsertOrderDetails {
  MessageCode?: string;
  Message?:     string;
}

export interface ErrorObj {
  Message?: string;
}
export interface MenuDetails {
  MenuHeadList?:         MenuHeadList[];
  MenuItemList?:         MenuItemList[];
  MenuItemModifierList?: IMenuDetailsSingleApi[];
}

export interface SelectObj {
  restId?:      number;
  cityId?:      number;
  areaId?:      number;
  pickStatus?: string ;
  pickupTime?: any;
}
//_______________________ track order ______________________

export interface IOrderStatus {
  RestaurantId?:               number;
  RestaurantName?:             string;
  CityName?:                   string;
  LocationName?:               string;
  RestaurantLogo?:             string;
  Cuisines?:                   string;
  OrderId?:                    number;
  TotalAmount?:                string;
  OrderDate?:                  string;
  Time?:                       string;
  ContactNumber?:              string;
  OrderType?:                  string;
  OrderStatus?:                string;
  BillNo?:                     string;
  FeedbackFacility?:           number;
  Status?:                     null;
  SpecialInstruction?:         string;
  DeliveryAddress?:            string;
  SubTotal?:                   string;
  TotalTax?:                   string;
  GrandTotal?:                 string;
  PropPubMenuItemList?:        PropPubMenuItemList[];
  PropPubPackingDeliveryList?: any[];
  PropPubModifierList?:        any[];
  PropPubTaxList?:             PropPubTaxList[];
}
export interface PropPubMenuItemList {
  PropPubMenuHeadCode?:            string;
  PropMenuItemCode?:               string;
  PropPubMenuItemDescription?:     string;
  PropPubMenuItemlineDescription?: string;
  PropPubIncomeHeadCode?:          null;
  PropPubImagePath?:               string;
  PropPubVegNonVeg?:               string;
  PropPubRate?:                    number;
  PropPubQuantityDeciaml?:         null;
  Status?:                         null;
  ItemType?:                       string;
  Quantity?:                       string;
}
export interface PropPubTaxList {
  TaxCode?:        string;
  TaxTitle?:       string;
  TaxDescription?: string;
  TaxType?:        string;
  ApplicableOn?:   string;
  Value?:          string;
  TaxAmount?:      string;
}

//DineIn or just order models

export interface ITableList {
  PropPubRestaurantId?: number;
  PropPubTableCode?:    string;
  PropPubTableNo?:      string;
}

