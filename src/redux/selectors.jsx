export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUser = state => state.auth.user;

export const getIsRefreshing = state => state.auth.isRefreshing;