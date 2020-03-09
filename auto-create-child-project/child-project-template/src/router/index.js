let children = [];
let siblings = [];

import moduleARoutes from "./module-a";
children = children.concat(moduleARoutes.children || []);
siblings = siblings.concat(moduleARoutes.siblings || []);

import moduleBRoutes from "./module-b";
children = children.concat(moduleBRoutes.children || []);
siblings = siblings.concat(moduleBRoutes.siblings || []);

export default {
    children,
    siblings,
};