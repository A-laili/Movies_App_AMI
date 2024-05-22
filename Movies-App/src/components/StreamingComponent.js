import React, { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

const StreamingComponent = () => {
    const videoRef = useRef();
    const [ages, setAges] = useState([]);
    const [averageAge, setAverageAge] = useState(null);

    useEffect(() => {
        startVideo();
        loadModels();
    }, []);

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((currentStream) => {
                videoRef.current.srcObject = currentStream;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const loadModels = async () => {
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
        await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
        await faceapi.nets.faceExpressionNet.loadFromUri("/models");
        await faceapi.nets.ageGenderNet.loadFromUri("/models");
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            detectAge();
        }, 100); // Adjust interval for real-time processing

        return () => clearInterval(intervalId);
    }, []);

    const detectAge = async () => {
        if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
            const detections = await faceapi.detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks()
                .withAgeAndGender();

            if (detections) {
                const age = faceapi.utils.round(detections.age, 0);
                setAges(prevAges => [...prevAges, age]);
            }
        }
    };

    useEffect(() => {
        if (ages.length > 0) {
            const totalAges = ages.reduce((acc, curr) => acc + curr, 0);
            const average = totalAges / ages.length;
            setAverageAge(average.toFixed(2));
        } else {
            setAverageAge(null);
        }
    }, [ages]);

    return (
        <div className="myapp">
            <h1>Real-time Age Detection</h1>
            <div className="appvideo">
                <video crossOrigin="anonymous" ref={videoRef} autoPlay muted></video>
            </div>
            {averageAge !== null && (
                <div>
                    <p>Average age: {averageAge}</p>
                    {averageAge > 18 ? (
                        <button onClick={() => window.location.href = 'https://www.netflix.com'}>Go to Netflix</button>
                    ) : (
                        <p>Error: You must be over 18 to access Netflix.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default StreamingComponent;
