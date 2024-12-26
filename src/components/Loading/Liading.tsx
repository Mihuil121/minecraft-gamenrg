import './loadingStyle.scss'; 

const Loading: React.FC = () => {
    return (
        <div className="loading">
            <div className="cube"></div> 
            <div className="loading-p">
                <p>Идёт загрузка</p>
            </div>
        </div>
    );
}

export default Loading;
