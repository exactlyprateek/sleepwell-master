import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const AddUser = React.lazy(() => import('./views/users/AddUser'));
const Products = React.lazy(() => import('./views/product/Products'));
const AddProduct = React.lazy(() => import('./views/product/AddProduct'));
const EditProduct = React.lazy(() => import('./views/product/EditProduct'));
const Categories = React.lazy(() => import('./views/category/Categories'));
const AddCategory = React.lazy(() => import('./views/category/AddCategory'));
const EditCategory = React.lazy(() => import('./views/category/EditCategory'));
const SubCategory = React.lazy(() => import('./views/subCategory/SubCategory'));
const AddSubCategory = React.lazy(() => import('./views/subCategory/AddSubCategory'));
const EditSubCategory = React.lazy(() => import('./views/subCategory/EditSubCategory'));
// const SubSubCategory  = React.lazy(() => import('./views/cateLevel3/SubSubCategory'));
// const AddSubSubCategory = React.lazy(() => import('./views/cateLevel3/AddSubSubCategory'));
const Sizes = React.lazy(() => import('./views/sizes/Size'));
const AddSizes = React.lazy(() => import('./views/sizes/AddSize'));
const EditSizes = React.lazy(() => import('./views/sizes/EditSizes'));
const Thickness = React.lazy(() => import('./views/thickness/Thickness'));
const AddThickness = React.lazy(() => import('./views/thickness/AddThickness'));
const EditThickness = React.lazy(() => import('./views/thickness/EditThickness'));
const Banners = React.lazy(() => import('./views/banner/Banners'));
const AddBanners = React.lazy(() => import('./views/banner/AddBanners'));
const EditBanner = React.lazy(() => import('./views/banner/EditBanner'));
const Permission = React.lazy(() => import('./views/permision/Permission'));
const AddPermission = React.lazy(() => import('./views/permision/AddPermission'));
const Newsletter = React.lazy(() => import('./views/newsletter/Newsletter'));
const Feedback = React.lazy(() => import('./views/feedback/Feedback'));
const Blog = React.lazy(() => import('./views/blog/Blog'));
const AddBlog = React.lazy(() => import('./views/blog/AddBlog'));
const EditBlog = React.lazy(() => import('./views/blog/EditBlog'));
const Benifits = React.lazy(() => import('./views/benifit/Benifits'));
const AddBenifit = React.lazy(() => import('./views/benifit/AddBenifit'));
const EditBenifit = React.lazy(() => import('./views/benifit/EditBenifit'));
const Advantages = React.lazy(() => import('./views/advantage/Advantages'));
const AddAdvantage = React.lazy(() => import('./views/advantage/AddAdvantage'));
const EditAdvantage = React.lazy(() => import('./views/advantage/EditAdvantage'));
const States = React.lazy(() => import('./views/state/States'));
const AddStates = React.lazy(() => import('./views/state/AddStates'));
const EditStates = React.lazy(() => import('./views/state/EditStates'));
const AboutUs = React.lazy(() => import('./views/aboutUs/About'));
const AddAboutUs = React.lazy(() => import('./views/aboutUs/AddAbout'));
const AddCards = React.lazy(() => import('./views/aboutUs/AddCards'));
const AboutCard = React.lazy(() => import('./views/aboutUs/AboutCard'));
const EditAboutCard = React.lazy(() => import('./views/aboutUs/EditAboutCard'));
const AboutBanner = React.lazy(() => import('./views/aboutUs/AboutBanner'));
const EditAboutBanner = React.lazy(() => import('./views/aboutUs/EditAboutBanner'));
const AddAboutBanner = React.lazy(() => import('./views/aboutUs/AboutBannerComponent'));
const AboutGoinGreen = React.lazy(() => import('./views/aboutUs/AboutGoinGreen'));
const AddAboutGoingGreen = React.lazy(() => import('./views/aboutUs/GoingGreenComponent'));
const PrivacyPolicy = React.lazy(() => import('./views/privacy-policy/PrivacyPolicy'));
const AddPrivacyPolicy = React.lazy(() => import('./views/privacy-policy/AddPrivacyPolicy'));
const EditPrivacyPolicy = React.lazy(() => import('./views/privacy-policy/EditPivacyPolicy'));
const FaqCategoreis = React.lazy(() => import('./views/faq/FaqCategoreis'));
const AddFaqCategoreis = React.lazy(() => import('./views/faq/AddFaqCategoreis'));
const EditFaqCategory = React.lazy(() => import('./views/faq/EditFaqCategory'));
const Faq = React.lazy(() => import('./views/faq/Faq'));
const AddFaq = React.lazy(() => import('./views/faq/AddFaq'));
const EditFaq = React.lazy(() => import('./views/faq/EditFaq'));
const WarrantyTerms = React.lazy(() => import('./views/warrantyTerms/WarrantyTerms'));
const AddWarrantyTerms = React.lazy(() => import('./views/warrantyTerms/AddWarrantyTerms'));
const EditWarrantyTerms = React.lazy(() => import('./views/warrantyTerms/EditWarrantyTerms'));
const ProductServiceReview = React.lazy(() => import('./views/product_service/ProductServiceReview'));
const AddProductServiceReview = React.lazy(() => import('./views/product_service/AddProductServiceReview'));
const TermsNConditions = React.lazy(() => import('./views/termConditions/TermsNConditions'));
const AddTermsNConditions = React.lazy(() => import('./views/termConditions/AddTermsNConditions'));
const AddTermsSection = React.lazy(() => import('./views/termConditions/AddSection'));
const Innovation = React.lazy(() => import('./views/innovation/Innovation'));
const AddInnovation = React.lazy(() => import('./views/innovation/AddInnovation'));
const EditInnovationCard = React.lazy(() => import('./views/innovation/EditInnovation'));
const InnovationComponent = React.lazy(() => import('./views/innovation/InnovationComponent'));
const GiftList = React.lazy(() => import('./views/gift/GiftList'));
const AddGift = React.lazy(() => import('./views/gift/AddGift'));
const City = React.lazy(() => import('./views/city/City'));
const AddCity = React.lazy(() => import('./views/city/AddCity'));
const Section = React.lazy(() => import('./views/section/Section'));
const AddSection = React.lazy(() => import('./views/section/AddSection'));
const AwardManage = React.lazy(() => import('./views/awards/AwardManage'));
const AddAward = React.lazy(() => import('./views/awards/AddAward'));
const EditAward = React.lazy(() => import('./views/awards/EditAward'));
const Testimonials = React.lazy(() => import('./views/testimonials/Testimonials'));
const AddTestimonials = React.lazy(() => import('./views/testimonials/AddTestimonials'));
const EditTestimonials = React.lazy(() => import('./views/testimonials/EditTestimonials'));
const Coupon = React.lazy(() => import('./views/coupon/Coupon'));
const AddCoupon = React.lazy(() => import('./views/coupon/AddCoupon'));
const Discount = React.lazy(() => import('./views/discount/Discount'));
const AddDiscount = React.lazy(() => import('./views/discount/AddDiscount'));
const GiftBundle = React.lazy(() => import('./views/gift/GiftBundle'));
const AddGiftBundle = React.lazy(() => import('./views/gift/AddGiftBundle'));
const ServiceActionCard = React.lazy(() => import('./views/serviceAction/ServiceActionCard'));
const AddServiceActionCard = React.lazy(() => import('./views/serviceAction/AddServiceActionCard'));
const EditServiceActionCard = React.lazy(() => import('./views/serviceAction/EditServiceActionCard'));
const ServiceHomePage = React.lazy(() => import('./views/ServiceHomePage/ServiceHomePage'));
const AddServiceHomePage = React.lazy(() => import('./views/ServiceHomePage/AddServiceHomaPage'));
const EditServiceBanner = React.lazy(() => import('./views/ServiceHomePage/EditServiceBanner'));
const ServicePage = React.lazy(() => import('./views/servicePages/ServicePage'));
const AddServicePage = React.lazy(() => import('./views/servicePages/AddServicePage'));
const BestSeller = React.lazy(() => import('./views/bestSeller/BestSeller'));
const OfferManagement = React.lazy(() => import('./views/offerManagement/OfferManagement'));
const AddGrid = React.lazy(() => import('./views/servicePages/AddGrid'));
const AddInnovations = React.lazy(() => import('./views/aboutUs/AddInnovations'));
const SubSubCategory = React.lazy(() => import('./views/subSubCategory/SubSubCategory'));
const AddSubSubCategory = React.lazy(() => import('./views/subSubCategory/AddSubSubCategory'));
const EditSubSubCategory = React.lazy(() => import('./views/subSubCategory/EditSubSubCategory'));
const Material = React.lazy(() => import('./views/material/Material'));
const AddMaterial = React.lazy(() => import('./views/material/AddMaterial'));
const EditMaterial = React.lazy(() => import('./views/material/EditMaterial'));
const WhatGoesInside = React.lazy(() => import('./views/whatGoesInside/WhatGoesInside'));
const EditWhatGoesInsideCard = React.lazy(() => import('./views/whatGoesInside/EditWhatGoesInsideCard'));
const AddWhatGoesInside = React.lazy(() => import('./views/whatGoesInside/AddWhatGoesInside'));
const OfferBanner = React.lazy(() => import('./views/offerBanner/OfferBanner'));
const AddOfferBanner = React.lazy(() => import('./views/offerBanner/AddOfferBanner'));
const ComfortZone = React.lazy(() => import('./views/comfortZone/ComfortZone'));
const MattressZone = React.lazy(() => import('./views/mattressZone/MattressZone'));

const AddMattressZone = React.lazy(() => import('./views/mattressZone/AddMattressZone'));
const EditMattressZone = React.lazy(() => import('./views/mattressZone/EditMattressZone'));
const ComfortBanners = React.lazy(() => import('./views/comfortBanner/ComfortBanners'));
const AddComfortBanner = React.lazy(() => import('./views/comfortBanner/AddComfortBanner'));
const EditComfortBanner = React.lazy(() => import('./views/comfortBanner/EditComfortBanner'));
const ComfortHome = React.lazy(() => import('./views/comfortHome/ComfortHome'));
const AddComfortHome = React.lazy(() => import('./views/comfortHome/AddComfortHome'));
const EditComfort = React.lazy(() => import('./views/comfortHome/EditComfort'));
const KidsComfort = React.lazy(() => import('./views/kidsComfort/KidsComfort'));
const AddKidsComfort = React.lazy(() => import('./views/kidsComfort/AddKidsComfort'));
const EditKidsComfort = React.lazy(() => import('./views/kidsComfort/EditKidsComfort'));
const ReturnPolicy = React.lazy(() => import('./views/returnPolicy/ReturnPolicy'));
const AddReturnPolicy = React.lazy(() => import('./views/returnPolicy/AddReturnPolicy'));
const EditReturnPolicy = React.lazy(() => import('./views/returnPolicy/EditReturnPolicy'));
const ServiceCard = React.lazy(() => import('./views/serviceCard/ServiceCard'));
const ServiceCategory = React.lazy(() => import('./views/servicePages/ServiceCategory'));
const ServiceCategoryAdd = React.lazy(() => import('./views/servicePages/ServiceCategoryAdd'));
const EditServiceCategory = React.lazy(() => import('./views/servicePages/EditServiceCategory'));
const AddServiceCard = React.lazy(() => import('./views/serviceCard/AddServiceCard'));
const EditServiceCard = React.lazy(() => import('./views/serviceCard/EditServiceCard'));
const ServicesAtHome = React.lazy(() => import('./views/serviceAtHome/ServicesAtHome'));
const ServiceSubPage = React.lazy(() => import('./views/serviceSubPages/ServiceSubPage'));
const AddServiceSubPage = React.lazy(() => import('./views/serviceSubPages/AddServiceSubPage'));
const HeaderTabs = React.lazy(() => import('./views/headerTabs/HeaderTabs'));
const EditHeaderTab = React.lazy(() => import('./views/headerTabs/EditHeaderTab'));
const AddHeaderTab = React.lazy(() => import('./views/headerTabs/AddHeaderTab'));
const BeddingSets = React.lazy(() => import('./views/beddingSets/BeddingSets'));
const EditBeddingSets = React.lazy(() => import('./views/beddingSets/EditBeddingSets'));
const AddBeddingSets = React.lazy(() => import('./views/beddingSets/AddBeddingSets'));
const ComfortActionCards = React.lazy(() => import('./views/comfortAction/ComfortActionCards'));
const EditComfortActionCards = React.lazy(() => import('./views/comfortAction/EditComfortActionCards'));
const AddComfortActionCards = React.lazy(() => import('./views/comfortAction/AddComfortActionCards'));
const Orders = React.lazy(() => import('./views/orders/Orders'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },

  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/add-user', exact: true, name: 'Add Users', component: AddUser },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/products', exact: true, name: 'Products', component: Products },
  { path: '/add-product', exact: true, name: 'Add Products', component: AddProduct },
  { path: '/edit-product/:id', exact: true, name: 'Edit Products', component: EditProduct },
  // { path: '/category-management', exact: true, name: 'Category Management' },
  { path: '/categories', exact: true, name: 'Category', component: Categories },
  { path: '/categories/add-category', exact: true, name: 'Add Category', component: AddCategory },
  { path: '/categories/edit-category/:id', name: 'Edit Category', component: EditCategory },
  { path: '/sub-categories', exact: true, name: 'Sub Category', component: SubCategory },
  { path: '/sub-categories/add-sub-categories', exact: true, name: 'Add Sub Category', component: AddSubCategory },
  { path: '/sub-categories/edit-sub-categories/:id', exact: true, name: 'Edit Sub Category', component: EditSubCategory },
  // { path: '/category-management/sub-sub-categories', exact: true, name: 'Third Level Category', component: SubSubCategory },
  // { path: '/category-management/add-third-level-categories', exact: true, name: 'Add Third Level Category', component: AddSubSubCategory },
  // { path: '/category-management/sizes', name: 'Sizes', component: Sizes, exact: true },
  { path: '/sizes', name: 'Sizes', component: Sizes, exact: true },
  { path: '/sizes/add-size', name: 'Add Size', component: AddSizes, exact: true },
  { path: '/sizes/edit-size/:id', name: 'Add Size', component: EditSizes, exact: true },
  { path: '/thickness', name: 'Thickness', component: Thickness, exact: true },
  { path: '/thickness/add-thickness', name: 'Add Thickness', component: AddThickness, exact: true },
  { path: '/thickness/edit-thickness/:id', name: 'Edit Thickness', component: EditThickness, exact: true },
  { path: '/banners-management', name: 'Banner Management', component: Banners, exact: true },
  { path: '/banners', exact: true, name: 'Banner', component: Banners },
  { path: '/banners/add-banners', name: 'Add Banner', component: AddBanners },
  { path: '/banners/edit-banner/:id', name: 'Edit Banner', component: EditBanner },
  { path: '/permission', exact: true, name: 'Permission', component: Permission },
  { path: '/permission/add', exact: true, name: 'Add Permission', component: AddPermission },
  { path: '/newsletter', name: 'Newsletter', component: Newsletter },
  { path: '/feedback', name: 'Feedback', component: Feedback },
  { path: '/blogs', name: 'Blog', component: Blog },
  { path: '/add-blog', name: 'Add Blog', component: AddBlog },
  { path: '/edit-blog/:id', name: 'Edit Blog', component: EditBlog },
  { path: '/benifits', name: 'Benefits', component: Benifits, exact: true },
  { path: '/benifits/add-benifit', name: 'Add Benefits', component: AddBenifit, exact: true },
  { path: '/benifits/edit-benifit/:id', name: 'Edit Benefits', component: EditBenifit, exact: true },
  { path: '/advantages', name: 'Advantage', component: Advantages, exact: true },
  { path: '/advantages/add-advantages', name: 'Add Advantage', component: AddAdvantage, exact: true },
  { path: '/advantages/edit-advantages/:id', name: 'Add Advantage', component: EditAdvantage, exact: true },
  { path: '/states', name: 'States', component: States, exact: true },
  { path: '/states/add-states', name: 'Add States', component: AddStates, exact: true },
  { path: '/states/edit-states/:id', name: 'Edit States', component: EditStates, exact: true },
  { path: '/about-us', name: 'About Us', component: AboutUs, exact: true },
  { path: '/about-us-card/add-about-us', name: 'Add AboutUs Card', component: AddAboutUs, exact: true },
  { path: '/about-us/add-about-us/add-cards', name: 'Add Cards', component: AddCards, exact: true },
  { path: '/about-us-banner', name: 'About Banner', component: AboutBanner, exact: true },
  // { path: '/about-us-banner/edit/:id', name: 'Edit About Banner', component: EditAboutBanner, exact: true },
  { path: '/about-us-banner/edit', name: 'Edit About Banner', component: EditAboutBanner, exact: true },
  { path: '/about-us-banner/add', name: 'About Banner', component: AddAboutBanner, exact: true },
  { path: '/about-us-going-green', name: 'About Going Green', component: AddAboutGoingGreen, exact: true },
  // { path: '/about-us-going-green/add', name: 'Add About Going Green', component: AddAboutGoingGreen, exact: true },
  { path: '/about-us-card', name: 'About Card', component: AboutCard, exact: true },
  { path: '/about-us-card/edit/:id', name: 'Edit About Card', component: EditAboutCard, exact: true },
  { path: '/privacy-policy', name: 'Privacy Policy', component: PrivacyPolicy, exact: true },
  { path: '/privacy-policy/add', name: 'Add Privacy Policy', component: AddPrivacyPolicy, exact: true },
  { path: '/privacy-policy/edit/:id', name: 'Edit Privacy Policy', component: EditPrivacyPolicy, exact: true },
  { path: '/faq-categories', name: 'Faq Categories', component: FaqCategoreis, exact: true },
  { path: '/faq-categories/add', name: 'Faq Categories', component: AddFaqCategoreis, exact: true },
  { path: '/faq-categories/edit/:id', name: 'Faq Categories', component: EditFaqCategory, exact: true },
  { path: '/faq', name: 'Faq', component: Faq, exact: true },
  { path: '/faq/add-faq', name: 'Add Faq', component: AddFaq, exact: true },
  { path: '/faq/edit-faq/:id', name: 'Edit Faq', component: EditFaq, exact: true },
  { path: '/warranty-terms', name: 'Warranty Terms', component: WarrantyTerms, exact: true },
  { path: '/warranty-terms/add', name: 'Add Warranty Terms', component: AddWarrantyTerms, exact: true },
  { path: '/warranty-terms/edit/:id', name: 'Edit Warranty Terms', component: EditWarrantyTerms, exact: true },
  { path: '/product-service-review', name: 'Product Service Review', component: ProductServiceReview, exact: true },
  { path: '/product-service-review/add', name: 'Product Service Review', component: AddProductServiceReview, exact: true },
  { path: '/terms-n-Conditions', name: 'Terms & Conditions', component: TermsNConditions, exact: true },
  { path: '/terms-n-Conditions/add', name: 'Add Terms & Conditions', component: TermsNConditions, exact: true },
  // { path: '/terms-n-Conditions/:id', name: 'Edit Terms & Conditions', component: AddTermsNConditions, exact: true },
  { path: '/terms-n-Conditions/add/add-section', name: 'Add section', component: AddTermsSection, exact: true },
  { path: '/innovation-card', name: 'Innovation Card', component: Innovation, exact: true },
  { path: '/innovation-card/add', name: 'Add Innovation Card', component: AddInnovation, exact: true },
  { path: '/innovation-card/edit/:id', name: 'Edit Innovation Card', component: EditInnovationCard, exact: true },
  { path: '/innovations', name: 'Innovation', component: InnovationComponent, exact: true },
  { path: '/gift-list', name: 'Gift Card List', component: GiftList, exact: true },
  { path: '/gift-list/add-gift-card', name: 'Add Gift Card', component: AddGift, exact: true },
  { path: '/city', name: 'City', component: City, exact: true },
  { path: '/city/add-city', name: 'Add City', component: AddCity, exact: true },
  { path: '/section', name: 'Section', component: Section, exact: true },
  { path: '/section/add-section', name: 'Add Section', component: AddSection, exact: true },
  { path: '/awards', name: 'Awards', component: AwardManage, exact: true },
  { path: '/awards/add-award', name: 'Add Award', component: AddAward, exact: true },
  { path: '/awards/edit-award/:id', name: 'Edit Award', component: EditAward, exact: true },
  { path: '/testimonials', name: 'Testimonials', component: Testimonials, exact: true },
  { path: '/testimonials/add-testimonials', name: 'Add Testimonials', component: AddTestimonials, exact: true },
  { path: '/testimonials/edit-testimonials/:id', name: 'Edit Testimonials', component: EditTestimonials, exact: true },
  { path: '/coupon', name: 'Coupons', component: Coupon, exact: true },
  { path: '/coupon/add-coupon', name: 'Add Coupons', component: AddCoupon, exact: true },
  { path: '/discount', name: 'Discount', component: Discount, exact: true },
  { path: '/discount/add-discount', name: 'Add Discount', component: AddDiscount, exact: true },
  { path: '/gift-bundle', name: 'Gift Bundle', component: GiftBundle, exact: true },
  { path: '/gift-bundle/add-gift-bundle', name: 'Add Gift Bundle', component: AddGiftBundle, exact: true },
  { path: '/service-action', name: 'Service Action Card', component: ServiceActionCard, exact: true },
  { path: '/service-action/add', name: 'Add Service Action Card', component: AddServiceActionCard, exact: true },
  { path: '/service-action/edit/:id', name: 'Edit Service Action Card', component: EditServiceActionCard, exact: true },
  { path: '/service-homepage', name: 'Service home page', component: ServiceHomePage, exact: true },
  { path: '/service-homepage/add', name: 'Add service home page', component: AddServiceHomePage, exact: true },
  { path: '/service-homepage/edit/:id', name: 'Edit service home page', component: EditServiceBanner, exact: true },
  { path: '/service-page', name: 'Service pages', component: ServicePage, exact: true },
  { path: '/service-page/add', name: 'Add service page', component: AddServicePage, exact: true },
  { path: '/service-sub-page', name: 'Service Sub pages', component: ServiceSubPage, exact: true },
  { path: '/service-sub-page/add', name: 'Add Service Sub page', component: AddServiceSubPage, exact: true },
  { path: '/best-seller', name: 'Best Seller', component: BestSeller, exact: true },
  { path: '/offer-management', name: 'Offer Management', component: OfferManagement, exact: true },
  { path: '/service-page/add/add-grid', name: 'Add grid', component: AddGrid, exact: true },
  { path: '/about-us/add-about-us/add-innovation', name: 'Add Innovations', component: AddInnovations, exact: true },
  { path: '/sub-sub-category', name: 'Sub sub category', component: SubSubCategory, exact: true },
  { path: '/sub-sub-category/add', name: 'Add sub sub category', component: AddSubSubCategory, exact: true },
  { path: '/sub-sub-category/edit/:id', name: 'Edit sub sub category', component: EditSubSubCategory, exact: true },
  { path: '/material', name: 'Material', component: Material, exact: true },
  { path: '/material/add', name: 'Add Material', component: AddMaterial, exact: true },
  { path: '/material/edit/:id', name: 'Edit Material', component: EditMaterial, exact: true },
  { path: '/what-goes-inside', name: 'What Goes Inside', component: WhatGoesInside, exact: true },
  { path: '/what-goes-inside/card/:id', name: 'Edit What Goes Inside', component: EditWhatGoesInsideCard, exact: true },
  { path: '/offer-banner', name: 'Offer Banner', component: OfferBanner, exact: true },
  { path: '/offer-banner/add', name: 'Add Offer Banner', component: AddOfferBanner, exact: true },
  { path: '/comfort-zone', name: 'Comfort Zone', component: ComfortZone, exact: true },
  { path: '/mattress-zone', name: 'Mattress Zone', component: MattressZone, exact: true },
  { path: '/mattress-zone/add', name: 'Add Mattress Zone', component: AddMattressZone, exact: true },
  { path: '/mattress-zone/edit/:id', name: 'Edit Mattress Zone', component: EditMattressZone, exact: true },
  { path: '/comfort-home', name: 'Comfort Home', component: ComfortHome, exact: true },
  { path: '/comfort-home/add', name: 'Add Comfort Home', component: AddComfortHome, exact: true },
  { path: '/comfort-home/edit/:id', name: 'Edit Comfort Home', component: EditComfort, exact: true }, 
 { path: '/kids-comfort', name: 'Kids Comfort', component: KidsComfort, exact: true },
  { path: '/kids-comfort/add', name: 'Add Kids Comfort', component: AddKidsComfort, exact: true },
  { path: '/kids-comfort/edit/:id', name: 'Edit Kids Comfort', component: EditKidsComfort, exact: true },   { path: '/comfort-banner', name: 'Comfort Banner', component: ComfortBanners, exact: true },
  { path: '/comfort-banner/add', name: 'Add Comfort Banner', component: AddComfortBanner, exact: true },
  { path: '/comfort-banner/edit/:id', name: 'Edit Comfort Banner', component: EditComfortBanner, exact: true },
  { path: '/return-policy', name: 'Return policy', component: ReturnPolicy, exact: true },
  { path: '/return-policy/add', name: 'Add Return policy', component: AddReturnPolicy, exact: true },
  { path: '/return-policy/edit/:id', name: 'Edit Return policy', component: EditReturnPolicy, exact: true },
  { path: '/service-category', name: 'Service Category', component: ServiceCategory, exact: true },
  { path: '/service-category/add', name: 'Add Service Category', component: ServiceCategoryAdd, exact: true },
  { path: '/service-category/edit/:id', name: 'Edit Service Category', component: EditServiceCategory, exact: true },
  { path: '/service-card', name: 'Service Card', component: ServiceCard, exact: true },
  { path: '/service-card/add', name: 'Add Service Card', component: AddServiceCard, exact: true },
  { path: '/service-card/edit/:id', name: 'Edit Service Card', component: EditServiceCard, exact: true },
  { path: '/services-at-home', name: 'Services At Home', component: ServicesAtHome, exact: true },  
  { path: '/comfort-card', name: 'Comfort Card', component: BeddingSets, exact: true },
  { path: '/comfort-card/edit/:id', name: 'Edit Comfort Card', component: EditBeddingSets, exact: true },
  { path: '/comfort-card/add/', name: 'Add Comfort Card', component: AddBeddingSets, exact: true },
  { path: '/header-tabs', name: 'Header Tabs', component: HeaderTabs, exact: true },
  { path: '/header-tabs/edit/:id', name: 'Edit Header Tab', component: EditHeaderTab, exact: true },
  { path: '/header-tabs/add/', name: 'Add Header Tab', component: AddHeaderTab, exact: true },
  { path: '/comfort-action', name: 'Comfort Action Card', component: ComfortActionCards, exact: true },
  { path: '/comfort-action/add', name: 'Add Comfort Action Card', component: AddComfortActionCards, exact: true },
  { path: '/comfort-action/edit/', name: 'Edit Comfort Action Card', component: EditComfortActionCards, exact: true },
  { path: '/orders/', name: 'All Orders', component: Orders, exact: true },

];

export default routes;
