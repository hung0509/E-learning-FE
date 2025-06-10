
// const Lesson = ({data}) => {

//     return (
//         <div className="lesson-web">
//             <iframe height="500" src={data.urlLesson}
//                 title={data.lessonName}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//                 referrerpolicy="strict-origin-when-cross-origin"
//                 className="w-100 border-0"
//                 allowfullscreen
//             >  
//             </iframe>
//             <h3 className="px-5 pt-5 color-common">{data.lessonName}</h3>
//             <div className="fs-6 opacity-50 px-5">{data.description}</div>
//             {/* <span className="fs-6 opacity-50 px-5">Cập nhật tháng 3 năm 2025</span> */}

//             <div>
//                 <p className="px-5 pb-3 pt-5">Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️</p>
//                 <p className="px-5"> Các bạn subscribe kênh Youtube F8 Official để nhận thông báo khi có các bài học mới nhé ❤️</p>
//             </div>
//         </div>
//     );
// }

// export default Lesson;
// import { useEffect, useRef, useState } from "react";
// import { useUserInfo } from "../../hook/useUserInfo";

// const Lesson = ({ data }) => {
//     const { handleLearning } = useUserInfo();
//     const playerRef = useRef(null);
//     const [isMarked, setIsMarked] = useState(false);
//     const hasMarked = useRef(false); // đảm bảo chỉ gọi 1 lần

//     // Tách videoId từ URL
//     const extractYouTubeVideoId = (url) => {
//         if (!url) return null;
//         const match = url.match(/(?:embed\/|v=|youtu\.be\/)([^?&]+)/);
//         return match ? match[1] : null;
//     };

//     const videoId = extractYouTubeVideoId(data.urlLesson);

//     useEffect(() => {
//         let intervalId;

//         const onPlayerReady = () => {
//             intervalId = setInterval(() => {
//                 const player = playerRef.current;
//                 if (player && player.getDuration) {
//                     const duration = player.getDuration();
//                     const currentTime = player.getCurrentTime();
//                     const percentWatched = (currentTime / duration) * 100;

//                     if (percentWatched >= 80 && !hasMarked.current) {
//                         hasMarked.current = true;
//                         markAsLearned(data.id);
//                         setIsMarked(true);
//                     }
//                 }
//             }, 2000);
//         };

//         const createPlayer = () => {
//             playerRef.current = new window.YT.Player("player", {
//                 height: "500",
//                 width: "100%",
//                 videoId: videoId,
//                 playerVars: {
//                     autoplay: 0,
//                     controls: 1,
//                 },
//                 events: {
//                     onReady: onPlayerReady,
//                 },
//             });
//         };

//         if (window.YT && window.YT.Player) {
//             createPlayer();
//         } else {
//             const tag = document.createElement("script");
//             tag.src = "https://www.youtube.com/iframe_api";
//             document.body.appendChild(tag);
//             window.onYouTubeIframeAPIReady = createPlayer;
//         }

//         return () => {
//             clearInterval(intervalId);
//             if (playerRef.current && playerRef.current.destroy) {
//                 playerRef.current.destroy();
//             }
//         };
//     }, [data.id, videoId]);


//     const markAsLearned = async () => {
//         console.log("80%");
//         await handleLearning({
//             lessonId: data.id
//         });
//     };

//     return (
//         <div className="lesson-web">
//             <div className="ratio ratio-16x9">
//                 <div id="player"></div>
//             </div>

//             <h3 className="px-5 pt-5 color-common">{data.lessonName}</h3>
//             <div className="fs-6 opacity-50 px-5">{data.description}</div>

//             <div>
//                 <p className="px-5 pb-3 pt-5">Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️</p>
//                 <p className="px-5">Các bạn subscribe kênh Youtube F8 Official để nhận thông báo khi có các bài học mới nhé ❤️</p>
//             </div>
//         </div>
//     );
// };

// export default Lesson;

import { useEffect, useRef, useState } from "react";
import { useUserInfo } from "../../hook/useUserInfo";

const Lesson = ({ data }) => {
    const playerRef = useRef(null);
    const hasMarked = useRef(false);
    const [isMarked, setIsMarked] = useState(false);
    const playerId = `player-${data.id}`;
     const { handleLearning } = useUserInfo() ;

    // Extract YouTube video ID from URL
    const extractYouTubeVideoId = (url) => {
        if (!url) return null;
        const match = url.match(/(?:embed\/|v=|youtu\.be\/)([^?&]+)/);
        return match ? match[1] : null;
    };

    const videoId = extractYouTubeVideoId(data.urlLesson);

    useEffect(() => {
        let intervalId;

        // Reset state when lesson changes
        hasMarked.current = false;
        setIsMarked(false);

        const onPlayerReady = () => {
            intervalId = setInterval(() => {
                const player = playerRef.current;
                if (player && player.getDuration) {
                    const duration = player.getDuration();
                    if (duration === 0) return; // video chưa sẵn sàng

                    const currentTime = player.getCurrentTime();
                    const percentWatched = (currentTime / duration) * 100;

                    if (percentWatched >= 80 && !hasMarked.current) {
                        hasMarked.current = true;
                        markAsLearned(data.id);
                        setIsMarked(true);
                    }
                }
            }, 2000);
        };

        const createPlayer = () => {
            playerRef.current = new window.YT.Player(playerId, {
                height: "500",
                width: "100%",
                videoId,
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                },
                events: {
                    onReady: onPlayerReady,
                },
            });
        };

        // Load YouTube IFrame API if needed
        if (window.YT && window.YT.Player) {
            createPlayer();
        } else {
            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(script);
            window.onYouTubeIframeAPIReady = () => createPlayer();
        }

        // Cleanup
        return () => {
            clearInterval(intervalId);
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
            }
        };
    }, [data.id, videoId, playerId]);

    const markAsLearned = async () => {
        console.log(`Đã xem >= 80% bài học ${data.id}`);
         await handleLearning({
            lessonId: data.id
        });
    };

    return (
        <div className="lesson-web">
            <div className="ratio ratio-16x9">
                <div id={playerId}></div>
            </div>

            <h3 className="px-5 pt-5 color-common">{data.lessonName}</h3>
            <div className="fs-6 opacity-50 px-5">{data.description}</div>

            <div>
                <p className="px-5 pb-3 pt-5">
                    Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️
                </p>
                <p className="px-5">
                    Các bạn subscribe kênh Youtube F8 Official để nhận thông báo khi có các bài học mới nhé ❤️
                </p>
            </div>
        </div>
    );
};

export default Lesson;

