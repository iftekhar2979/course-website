import React, { createContext, useState } from 'react';

export const DataProvider=createContext()
const SearchContext = ({children}) => {
    const [filtered,setFiltered]=useState(null)
    const [searchContext,setSearchContext]=useState('')
    const [singleContent,setSingleContent]=useState()
    const [contentId,setContentId]=useState()
    const [courses,setCourses]=useState()
//    console.log(contentId);
const handleClick = (e) => {
    setSearchContext(e);
    searchFormCategory()
  };
  const searchFormCategory=()=>{
    const filteredItem=courses?.filter(item=>{
     return   item.category.toLowerCase()===searchContext.toLowerCase()
  })
  setFiltered(filteredItem)
    
  }
    const object={filtered,setFiltered,searchContext,setSearchContext,courses,setCourses,handleClick,singleContent,setSingleContent,contentId,setContentId}
    return (
        <DataProvider.Provider value={object}>
            {children}
        </DataProvider.Provider>
    );
};

export default SearchContext;