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
            type: "awareness",
            description: "This is a short description for card 1."
        },
        {
            id: 2,
            image: "https://via.placeholder.com/800x400?text=Image+2",
            title: "Card Title 2",
            type: "inspiration",
            description: "This is a slightly longer description that will get truncated if it exceeds two lines."
        },
        {
            id: 3,
            image: "https://via.placeholder.com/800x400?text=Image+3",
            title: "Card Title 3",
            type: "entertainment",
            description: "This is a short description for card 1."
        },
        {
            id: 4,
            image: "https://via.placeholder.com/800x400?text=Image+1",
            title: "Card Title 4",
            type: "awareness",
            description: "This is a slightly longer description that will get truncated if it exceeds two lines."
        },
        {
            id: 5,
            image: "https://via.placeholder.com/800x400?text=Image+1",
            title: "Card Title 5",
            type: "inspiration",
            description: "This is a short description for card 1."
        },
        {
            id: 6,
            image: "https://via.placeholder.com/800x400?text=Image+1",
            title: "Card Title 6",
            type: "entertainment",
            description: "This is a slightly longer description that will get truncated if it exceeds two lines."
        },
        {
            id: 7,
            image: "https://via.placeholder.com/800x400?text=Image+7",
            title: "Card Title 7",
            type: "awareness",
            description: "This is a short description for card 1."
        }
    ],
    feedback: 0,
    modalOpenStatus: false,
    emojisData: [
        {
            id: 1, emoji: "sad-icon", label: "Sad"
        },
        {
            id: 2, emoji: "neutral-icon", label: "Neutral"
        },
        {
            id: 3, emoji: "happy-icon", label: "Happy"
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
