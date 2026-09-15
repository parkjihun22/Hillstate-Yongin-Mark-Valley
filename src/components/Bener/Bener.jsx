import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="힐스테이트 도안리버파크-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '힐스테이트' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    지친 하루를 마치고 본연의 안식으로 돌아가는 순간, 누리는 프리미엄.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전 도안 신도시의 중심에서
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 브랜드, 힐스테이트 도안리버파크와 함께합니다.
                </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전 도안 신도시가 선택한 새로운 주거 기준
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    대전 도안 생활권·광역 교통망 프리미엄
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    브랜드 가치와 함께 시작하는 미래
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    힐스테이트 도안리버파크
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    교육·교통·생활 인프라가 조화를 이루는 신도시 중심
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    기대하던 모든 프리미엄이 힐스테이트 도안리버파크에서 실현됩니다
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화 설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    편리한 생활을 위한 최적의 공간 설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    힐스테이트 도안리버파크, 도안 신도시에 찾아옵니다
                </div>
            </>
        );
    }
};
