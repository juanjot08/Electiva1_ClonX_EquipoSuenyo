import HomeFilledImage from "../../public/images/home-filled.png"

export const SearchIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" > <g> <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"> </path> </g> </svg></div>
}

export const NotificationIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></g></svg></div>
}

export const UnfilledHomeIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path></g></svg></div>
}
export const UnfilledNotificationHomeIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path></g></svg>
        <div aria-label="undefined elementos no leídos" style={{ position: "relative", height: "7px", width: "7px", right: "-17px", top: "-26px", backgroundColor: "rgb(29, 155, 240)", border: "0 solid black", borderRadius: "32px", boxSizing: "border-box", display: "flex", margin: "0px", padding: "0px" }}></div></div>
}
export const FilledHomeIconSVG = ({ width = "26.250px", height = "26px" }) => {
    return <div style={{ width: width, height: height, marginTop: "-2px", marginLeft: "-4px" }}><img style={{ height: "100%" }} src={HomeFilledImage} /></div>
}


export const NotificationHomeIconSVG = ({ width = "26.250px", height = "26px" }) => {
    return <div style={{ width: width, height: height, marginTop: "-2px", marginLeft: "-4px" }}><img style={{ height: "100%" }} src={HomeFilledImage} />
        <div aria-label="undefined elementos no leídos" style={{ position: "relative", height: "7px", width: "7px", right: "-21px", top: "-28px", backgroundColor: "rgb(29, 155, 240)", border: "0 solid black", borderRadius: "32px", boxSizing: "border-box", display: "flex", margin: "0px", padding: "0px" }}></div></div>
}

export const EmailIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg></div>
}

export const GrokIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><g><path d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"></path><path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path></g><defs><clipPath id="0-clip0_2592_269"><rect height="20" rx="1" width="20" x="2" y="2"></rect></clipPath></defs></g></svg></div>
}

export const PeopleIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path></g></svg></div>
}

export const PersonIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg></div>
}

export const OptionsIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg></div>
}

export const FeatherIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%", color: "rgb(255, 255, 255)" }} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg></div>
}

export const XIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg></div>
}

export const RetweetIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg></div>
}

export const CommentsIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg></div>
}

export const LikeIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg></div>
}

export const MarkIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg></div>
}

export const ShareIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg></div>
}

export const ParamsIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z"></path></g></svg></div>
}

export const DownArrowIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path></g></svg></div>
}

export const LeftArrowIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%", color: "rgb(239, 243, 244)" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></div>
}

export const GoogleIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></div>
}

export const AppleIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%", color: "rgb(15, 20, 25)" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path></g></svg></div>
}

export const SavesIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg></div>
}

export const LightningIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"></path></g></svg></div>
}
export const ThreeDotsIconSVG = ({ width = "26.250px", height = "26.250px" }) => {
    return <div style={{ width: width, height: height }}><svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg></div>
}