const ButtonFavorite = (isLiked) => `
        <button 
            id="btnFavorite" 
            class="btn${isLiked ? ' liked' : ''}" 
            title="${isLiked ? ' Remove from favorite' : 'Add to favorite'}" 
            aria-label="${isLiked ? 'Remove from favorite' : 'Add to favorite'}"
        >
            <i class="${isLiked ? 'ph-fill' : 'ph-bold'} ph-heart" aria-hidden="true"></i>
        </button>
    `;

export default ButtonFavorite;
