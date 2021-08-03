import React, { Fragment } from "react";

import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    icon: <i className="ri-dashboard-2-fill mr-3 ri-lg" />,
    badge: {
      color: "info",
      // text: 'NEW',
    },
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Base',
  //   route: '/base',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Forms',
  //       to: '/base/forms',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Jumbotron',
  //       to: '/base/jumbotrons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Navs',
  //       to: '/base/navs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Navbars',
  //       to: '/base/navbars',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Progress',
  //       to: '/base/progress-bar',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Switches',
  //       to: '/base/switches',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tabs',
  //       to: '/base/tabs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Buttons',
  //   route: '/buttons',
  //   icon: 'cil-cursor',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Brand buttons',
  //       to: '/buttons/brand-buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Dropdowns',
  //       to: '/buttons/button-dropdowns',
  //     }
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: 'cil-chart-pie'
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Toaster',
  //       to: '/notifications/toaster'
  //     }
  //   ]
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Account',
  //   route: '/pages',
  //   icon: 'cil-user',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Login',
  //   to: '/login',
  //   icon: 'cil-user',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Register',
  //   to: '/register',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Add Product',
  //   to: '/500',
  // },

  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },

  // ----------------------------

  //* Home page
  {
    _tag: "CSidebarNavDropdown",
    name: "Home Management",
    // route: '/category-management',
    icon: <i className="ri-home-smile-2-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Home banners",
        to: "/banners",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Offer banner",
        to: "/offer-banner",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Comfort home",
        to: "/comfort-home",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Comfort Zone",
        to: "/comfort-zone",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Mattress Zone",
        to: "/mattress-zone",
      },
      // {
      //     _tag: 'CSidebarNavItem',
      //     name: 'Best Seller',
      //     to: '/best-seller',
      // },
    ],
  },
  //* content management
  {
    _tag: "CSidebarNavDropdown",
    name: "Content Management",
    // route: '/category-management',
    icon: <i className="ri-bubble-chart-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavDropdown",
        name: "About Us",
        // to: '/about-us',
        _children: [
          // {
          //     _tag: 'CSidebarNavItem',
          //     name: 'About us',
          //     to: '/about-us',
          // },
          {
            _tag: "CSidebarNavItem",
            name: "About Us Banner",
            to: "/about-us-banner/edit",
          },
          {
            _tag: "CSidebarNavItem",
            name: "About Us Card",
            to: "/about-us-card",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Going Green",
            to: "/about-us-going-green",
          },
        ],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Privacy Policy",
        to: "/privacy-policy",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Product/Service Reviews",
        to: "/product-service-review",
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "FAQ’s",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "FAQ Category",
            to: "/faq-categories",
          },
          {
            _tag: "CSidebarNavItem",
            name: "FAQ",
            to: "/faq",
          },
        ],
        // to: '/products',
      },
      {
        _tag: "CSidebarNavItem",
        name: "Terms & Conditions",
        to: "/terms-n-Conditions/add",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Return Policy",
        to: "/return-policy",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Warranty Terms",
        to: "/warranty-terms",
      },
    ],
  },
  //* banner management
  {
    _tag: "CSidebarNavDropdown",
    name: "Banner Management",
    // route: '/banners-manaement',
    icon: <i className="ri-image-2-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Best seller",
        to: "/best-seller",
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "Innovation Management",
        // to: '/innovation',
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Innovation",
            to: "/innovations",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Innovation card",
            to: "/innovation-card",
          },
        ],
      },
      {
        _tag: "CSidebarNavItem",
        name: "Offer Management",
        to: "/offer-management",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Comfort Sets",
    // route: '/banners-manaement',
    icon: <i className="ri-image-2-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Banner",
        to: "/comfort-banner",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cards",
        to: "/comfort-card",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Action Cards",
        to: "/comfort-action",
      },
      // {
      // 	_tag: 'CSidebarNavItem',
      // 	name: 'Pillow Sets',
      // 	to: '/pillow-sets'
      // },
      // {
      // 	_tag: 'CSidebarNavItem',
      // 	name: 'All Weather Comforters',
      // 	to: '/all-weather'
      // },
      // {
      // 	_tag: 'CSidebarNavItem',
      // 	name: 'Custom Bedding Set',
      // 	to: '/custom-bedding'
      // }
    ],
  },
  //* product management

  {
    _tag: "CSidebarNavDropdown",
    name: "Product Management",
    // route: '/category-management',
    icon: <i className="ri-shopping-bag-2-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Category",
        to: "/categories",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Sub Categories",
        to: "/sub-categories",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Sub Sub Categories",
        to: "/sub-sub-category",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Material",
        to: "/material",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Sizes",
        to: "/sizes",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Thickness",
        to: "/thickness",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Benefits",
        to: "/benifits",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Advantages",
        to: "/advantages",
      },
      {
        _tag: "CSidebarNavItem",
        name: "What goes inside",
        to: "/what-goes-inside",
      },
      {
        _tag: "CSidebarNavItem",
        name: "States",
        to: "/states",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Products",
        to: "/products",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Coupon & Gift Management",
    // route: '/category-management',
    icon: <i className="ri-price-tag-3-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Coupon Management",
        to: "/coupon",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Discount/Offer Management",
        to: "/discount",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Gift Card Management",
    // route: '/category-management',
    icon: <i className="ri-gift-2-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Gifts List",
        to: "/gift-list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Gift  Purchase",
        // to: '/sub-categories',
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add Gift Bundle",
        to: "/gift-bundle",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Cities Management",
    // route: '/category-management',
    icon: <i className="ri-building-2-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "City List",
        to: "/city",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Section Management",
    // route: '/category-management',
    icon: <i className="ri-layout-masonry-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Section",
        to: "/section",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Mattress Selector",
    // route: '/category-management',
    icon: <i className="ri-store-2-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Questions & Answers",
        // to: '/categories',
      },
      {
        _tag: "CSidebarNavItem",
        name: "Logic",
        // to: '/sub-categories',
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Communication Management",
    // route: '/category-management',
    icon: <i className="ri-link-unlink mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Blog",
        to: "/blogs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Awards Management",
        to: "/awards",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Testimonials Management",
        to: "/testimonials",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Services",
    route: "/category-management",
    icon: <i className="ri-list-settings-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Banner",
        to: "/service-homepage",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Service Action Cards",
        to: "/service-action",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Service Cards",
        to: "/service-card",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Service Category",
        to: "/service-category",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pages",
        to: "/service-page",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Sub Pages",
        to: "/service-sub-page",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Services At Home",
        to: "/services-at-home",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Header Tabs",
        to: "/header-tabs",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Role Management",
    // route: '/category-management',
    icon: <i className="ri-user-settings-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Users",
        to: "/users",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Permissions",
        to: "/permission",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Orders",
    // route: '/category-management',
    icon: <i className="ri-user-settings-fill mr-3 ri-lg" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Orders List View",
        to: "/orders",
      },
      // ,
      // {
      //     _tag: 'CSidebarNavItem',
      //     name: 'Orders Log',
      //     to: '/permission',
      // },
    ],
  },
  // {
  //     _tag: 'CSidebarNavItem',
  //     name: 'Users',
  //     to: '/users',
  //     // icon: 'cil-user',
  //     icon: <i className="ri-user-fill mr-3 ri-lg"></i>,
  // },
  // {
  //     _tag: 'CSidebarNavItem',
  //     name: 'Permision',
  //     to: '/permision',
  //     icon: <i className="ri-rotate-lock-fill mr-3 ri-lg"></i>,
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Newsletter",
    to: "/newsletter",
    icon: <i className="ri-mail-volume-fill mr-3 ri-lg" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Feedback",
    to: "/feedback",
    icon: <i className="ri-feedback-fill mr-3 ri-lg" />,
  },
  // {
  //     _tag: 'CSidebarNavItem',
  //     name: 'Blog',
  //     to: '/blogs',
  //     icon: <i className="ri-image-2-fill mr-3 ri-lg"></i>,
  // },
  // {
  //     _tag: 'CSidebarNavItem',
  //     name: 'Products',
  //     to: '/add-product',
  //     icon: 'cil-user',
  // },
];

export default _nav;
