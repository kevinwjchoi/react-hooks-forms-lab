import React from "react";

const SearchContext= React.createContext();

function SearchProvider({children}){

    return <SearchContext.Provider value={null}>{children}</SearchContext.Provider>;


}

export {SearchContext, SearchProvider};

