// gatsby browser offers a range of API that can be used to change how our wesite behaves


const transitionDelay= 500

exports.shouldUpdateScroll = ({
    routerProps: { location }, //location
    getSavedScrollPosition,     //last position on the previous page
}) => {
    if(location.action === 'PUSH'){
        window.setTimeout(()=> window.scrollTo (0,0), transitionDelay) 
    }
    else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
            ()=> window.scrollTo(...window(savedPosition || [0,0])),
            transitionDelay
        )
    }
    return false
    }

