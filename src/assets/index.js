export const assets = {
  icons: {
    dashboard: require("./icons/dashboard-3.svg").default,
    apprenteceships: require("./icons/medal-star.svg").default,
    internships: require("./icons/book.svg").default,
    jobs: require("./icons/briefcase.svg").default,
    settings: require("./icons/setting-2.svg").default,
  },
};

// BIG W: FINALLY FIGURED OUT HOW TO DYNAMICALLY IMPORT IMAGES
/* so what was the issue? refer to issue vn
So appaz, to link stuff as src, you either import dynamically i.e how you import components or provide the full path inline. But you need the require keyword and default
Omo this issue is too complicated to type
 my inspiration was the style ayinda used for react native app
*/