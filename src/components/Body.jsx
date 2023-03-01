import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { displayMyProfile, watermarkImageThunk } from '../redux/slices/homeSlice';
import image2 from "../../src/assets/placeholder.jpeg";


const Body = () => {
    const fileRef = useRef(null);
    const inputRef = useRef("");
    const [selectedImage, setSelectedImage] = useState()
    const [angle, setAngle] = useState(0)
    const state = useSelector(state => state.waterMarker)
    const dispatch = useDispatch()
    const { loading, error, image, displayMyProfile } = state;
    const marks = [
        {
            value: 0,
            label: '0°',
        },

        {
            value: 60,
            label: '60°',
        },
        {
            value: 120,
            label: '120°',
        },
        {
            value: 180,
            label: '180°',
        },
        {
            value: 270,
            label: '270°',
        },
        {
            value: 360,
            label: '360°',
        },
    ];

    function valuetext(value) {
        return `${value}°`;
    }
    if (displayMyProfile) {
        return <section class="bg-white">
            <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl mb-5'>Aransiola Favour Taiye</h2>
            <h1 class="text-gray-500"><span class="font-medium">Filey Coders</span> - Senior Software Engineeer</h1>
            <hr />
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="lg:w-4/5">
                        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
                        <p class="mt-4 text-lg text-gray-500">Hello there, I am a skilled individual with a wide range of expertise in various areas of the tech industry. With a demonstrated skill set in Web Development, Mobile Development, Back-end Programming, Version Control, Cloud Hosting, and Containerization, I have a comprehensive understanding of how to build and maintain highly scalable and maintainable systems.

                            One of my strengths lies in my knowledge of software design architectures, including data structures and algorithms. This knowledge has enabled me to develop efficient and effective solutions for complex problems, making me an asset to any team.

                            In addition to my technical skills, I have excellent communication skills, effective leadership qualities, and a strong sense of teamwork. I believe that working collaboratively is essential to success in the tech industry, and I strive to create an environment where everyone feels valued and heard.

                            I am excited about the opportunities that the tech industry holds and eager to pursue a career in this field. With my problem-solving skills, technical knowledge, and team-oriented approach, I am confident that I can make a positive impact on any project or organization that I work with.</p>
                    </div>

                </div>
            </div>
        </section>

    }
    return (
        <div>
            <section>
                <label for="input-field">Watermark Text</label>
                <br />
                <input ref={inputRef} type="text" id="input-field" name="input-field" className='outline' />
            </section>


            {/* Orientation */}
            <section className='my-5'>
                <label >Angle of Orientation</label>
                <Box sx={{ width: 300 }}>
                    <Slider
                        aria-label="Always visible"
                        defaultValue={45}
                        getAriaValueText={valuetext}
                        onChange={(e, value) => {
                            setAngle(value);
                        }}
                        step={15}
                        marks={marks}
                        valueLabelDisplay="on"
                        max={360}
                    />
                </Box>
            </section>


            {/* File */}
            <section>
                <label for="input-field">File</label>
                <input ref={fileRef} type="file" id="input-field" name="image" accept='image/*' onChange={(e) => {
                    setSelectedImage(URL.createObjectURL(e.target.files[0]))
                    dispatch(watermarkImageThunk({
                        "watermarkText": inputRef.current.value, "angleOfRotation": angle, "image": fileRef.current.files[0]
                    }))
                }} />
            </section>
            <div className='flex my-5'>
                <section className='mx-5' >
                    {selectedImage ? <div>
                        <h3>Preview</h3>
                        <img src={selectedImage} className="w-[150px]" />

                    </div> : <div>No Preview</div>}
                </section>
                <section className='mx-5' >
                    {selectedImage ? <div>
                        <h3>Watermarked</h3>
                        {loading || error ? <div className='w-40 h-32 animate-pulse'>

                        </div> : <img src={image} className="w-[150px] mb-5" />}

                        <a href={image} download className='bg-lime-700 my-5 rounded p-3 text-white'>Download</a>
                    </div> : <div>No Preview</div>}
                </section>
            </div>


        </div>
    )
}

export default Body