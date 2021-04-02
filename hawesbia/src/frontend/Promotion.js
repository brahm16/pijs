const Promotion=()=>{
    const style = {
        backgroundImage: "url('img/zagh/IMG2.jpg')",
      };
    return(
        <div class="discount_section" style={style}>
        <div class="wrap">
            <div class="wrap_float">
                <div class="section_content">
                    <div class="tag">SALE</div>
                    <h2 class="section_title">Discount <span class="discount_tag">20% off</span> </h2>
                    <p class="text">
                        Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    </p> 
                    <div class="buttons">
                        <a href="tour-list.html" class="btn">See Promotionq</a>
                        <a href="tour-list.html" class="btn btn__choose_tour">Choose Promotion</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Promotion;