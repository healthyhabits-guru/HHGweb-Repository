import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tabs: [
        {
            id: 1,
            name: 'మన ఇల్లు'
        },
        {
            id: 2,
            name: 'అవగాహన'
        },
        {
            id: 3,
            name: 'స్ఫూర్తి కథ'
        },
        {
            id: 4,
            name: 'వినోదం'
        }
    ],
    carouselImages: [
        {
            id: 1,
            url: 'https://via.placeholder.com/800x400?text=Image+1'
        },
        {
            id: 2,
            url: 'https://via.placeholder.com/800x400?text=Image+2'
        },
        {
            id: 3,
            url: 'https://via.placeholder.com/800x400?text=Image+3'
        },
    ],
    selectedTabId: 1,
    homeTabCardData: [
        {
            id: 1,
            image: "https://via.placeholder.com/800x400?text=Image+1",
            title: "Card Title 1",
            description: "This is a short description for card 1."
        },
        {
            id: 2,
            image: "https://via.placeholder.com/800x400?text=Image+2",
            title: "Card Title 2",
            description: "This is a slightly longer description that will get truncated if it exceeds two lines."
        },
        {
            id: 3,
            image: "https://via.placeholder.com/800x400?text=Image+3",
            title: "Card Title 3",
            description: "This is a short description for card 1."
        },
        {
            id: 4,
            image: "https://via.placeholder.com/800x400?text=Image+1",
            title: "Card Title 4",
            description: "This is a slightly longer description that will get truncated if it exceeds two lines."
        },
        {
            id: 5,
            image: "https://via.placeholder.com/800x400?text=Image+1",
            title: "Card Title 5",
            description: "This is a short description for card 1."
        },
        {
            id: 6,
            image: "https://via.placeholder.com/800x400?text=Image+1",
            title: "Card Title 6",
            description: "This is a slightly longer description that will get truncated if it exceeds two lines."
        },
        {
            id: 7,
            image: "https://via.placeholder.com/800x400?text=Image+7",
            title: "Card Title 7",
            description: "This is a short description for card 1."
        }
    ],
    feedback: 0,
    modalOpenStatus: false,
    emojisData: [
        {
            id: 1, emoji: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
                <circle cx="9" cy="9" r="1" fill="black" />
                <circle cx="15" cy="9" r="1" fill="black" />
                <path d="M15 15C15 15 13 13 11 13C9 13 7 15 7 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>, label: "Sad"
        },
        {
            id: 2, emoji: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
                <circle cx="9" cy="9" r="1" fill="black" />
                <circle cx="15" cy="9" r="1" fill="black" />
                <line x1="8" y1="15" x2="16" y2="15" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>, label: "Neutral"
        },
        {
            id: 3, emoji: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
                <circle cx="9" cy="9" r="1" fill="black" />
                <circle cx="15" cy="9" r="1" fill="black" />
                <path d="M7 15C7 15 9 17 11 17C13 17 15 15 15 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>, label: "Happy"
        }
    ],
    oneMinuteVideosData: [
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 1", subtitle: "Subtitle 1" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 2", subtitle: "Subtitle 2" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 3", subtitle: "Subtitle 3" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 4", subtitle: "Subtitle 4" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 5", subtitle: "Subtitle 5" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 1", subtitle: "Subtitle 1" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 2", subtitle: "Subtitle 2" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 3", subtitle: "Subtitle 3" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 4", subtitle: "Subtitle 4" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 5", subtitle: "Subtitle 5" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 1", subtitle: "Subtitle 1" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 2", subtitle: "Subtitle 2" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 3", subtitle: "Subtitle 3" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 4", subtitle: "Subtitle 4" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 5", subtitle: "Subtitle 5" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 1", subtitle: "Subtitle 1" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 2", subtitle: "Subtitle 2" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 3", subtitle: "Subtitle 3" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 4", subtitle: "Subtitle 4" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 5", subtitle: "Subtitle 5" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 1", subtitle: "Subtitle 1" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 2", subtitle: "Subtitle 2" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 3", subtitle: "Subtitle 3" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 4", subtitle: "Subtitle 4" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 5", subtitle: "Subtitle 5" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 1", subtitle: "Subtitle 1" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 2", subtitle: "Subtitle 2" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 3", subtitle: "Subtitle 3" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 4", subtitle: "Subtitle 4" },
        { src: "https://via.placeholder.com/800x400?text=Image+1", caption: "Caption 5", subtitle: "Subtitle 5" }
    ]
};

export const hhgSlice = createSlice({
    name: "hhg",
    initialState,
    reducers: {
        updateSelectedTabId(state, action) {
            state.selectedTabId = action.payload;
        },
        updateFeedback(state, action) {
            state.feedback = action.payload;
        },
        updateModalOpenStatus(state, action) {
            state.modalOpenStatus = action.payload;
        }
    },
});

// Export actions
export const { updateSelectedTabId, updateFeedback, updateModalOpenStatus } = hhgSlice.actions;

// Export reducer
export default hhgSlice.reducer;
