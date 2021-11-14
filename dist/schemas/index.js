"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./main/index");
const index_2 = require("./rinkeby/index");
exports.schemas = {
    rinkeby: index_2.rinkebySchemas,
    main: index_1.mainSchemas,
    testnet: index_1.mainSchemas,
    ropsten: index_1.mainSchemas,
};
//# sourceMappingURL=index.js.map