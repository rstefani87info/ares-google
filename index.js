/** 
* @author Roberto Stefani 
**/ 
import aReS from '@ares/core';
import datasources from "@ares/datasources.js";

(await datasources.initAllDatasources(aReS,()=>null,true)).forEach((datasource) => {
    if(datasource.restRouter && Array.isArray(datasource.restRouter))datasource.restRouter.forEach((r) => r(aReS.server));
  });

aReS.googleProvider = aReS.datasourceMap;

