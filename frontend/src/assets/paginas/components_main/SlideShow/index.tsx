import './styles.css'

//import './script'




function SlideShow() {
    return (
        <>
            <div className='fixo'>


                <div className='slider'>

                    <div className='slides'>

                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />



                        <div className='slide first'>
                            <img src="https://cdns1.2rscms.com.br/imgcache/2008/711x640/custom/2008/uploads/album/3783/photo_5e4439bab5fcf.JPG.webp" alt="imagem1" />
                        </div>
                        <div className='slide'>
                            <img src="https://cdns1.2rscms.com.br/imgcache/2008/711x640/custom/2008/uploads/album/3783/photo_5e4439bab758a.JPG.webp" alt="imagem2" />
                        </div>
                        <div className='slide'>
                            <img src="https://cdns1.2rscms.com.br/imgcache/2008/711x640/custom/2008/uploads/album/3783/photo_5e4439bab7a0d.JPG.webp" alt="imagem3" />
                        </div>
                        <div className='slide'>
                            <img src="https://cdns1.2rscms.com.br/imgcache/2008/711x640/custom/2008/uploads/album/3783/photo_5e4439bab7eba.JPG.webp" alt="imagem4" />
                        </div>


                        <div className='navigation-auto'>
                            <div className='auto-btn1'></div>
                            <div className='auto-btn2'></div>
                            <div className='auto-btn3'></div>
                            <div className='auto-btn4'></div>

                        </div>

                    </div>

                    <div className='manual-navigation'>
                        <label htmlFor="radio1" className='manual-btn'></label>
                        <label htmlFor="radio2" className='manual-btn'></label>
                        <label htmlFor="radio3" className='manual-btn'></label>
                        <label htmlFor="radio4" className='manual-btn'></label>
                    </div>

                </div>


            </div>
        </>
    )
}


export default SlideShow


