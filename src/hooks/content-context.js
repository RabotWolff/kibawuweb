import * as React from 'react'

const ContentContext = React.createContext()

function contentReducer(state, action) {
  
  switch (action.type) {
    case 'addData': {
      return {
        ...state, ...action.contentData
    }
    }
    
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function ContentProvider({children}) {
  const [state, dispatchContent] = React.useReducer(contentReducer, {})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatchContent}
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

function useContent() {
  const context = React.useContext(ContentContext)
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}

export {ContentProvider, useContent}