import React from 'react';
import styles from './slideOne.module.scss'
import ImageGallery from "../../components/imagesGallery/imagesGallery";

const SlideOne = () => {
    const images = [
        '/uploads/plants/1.jpg',
        '/uploads/plants/2.jpg',
        '/uploads/plants/3.jpg',
        '/uploads/plants/4.jpg',
        '/uploads/plants/5.jpg',
        '/uploads/plants/6.jpeg',
        '/uploads/plants/7.jpg',
        '/uploads/plants/8.jpg',
        '/uploads/plants/9.jpg',
        '/uploads/plants/10.jpg',
    ];
    return (
        <div className={styles.root}>
            <h1>Leading Producer of Wastewater Treatment Plants</h1>
            <h2>Domestic Wastewater Treatment Plants (WWTP)</h2>
            <h3>High-rate biological treatment</h3>

            <p>The Fixed Bed Biological Reactor (FBBR) uses a modified “fixed bed” process to achieve high-rate pollutant removal in a very compact footprint. By utilizing special cascades and aeration sequences, the Fixed Bed Reactor can biologically treat municipal and highly loaded industrial wastewaters.</p>

            <p>Fixed Bed Biological Reactor (FBBR) is a more robust process than typical activated sludge processes. It is able to handle much higher pollutant concentrations than MBR and MBBR processes. It also produces less sludge than conventional biological wastewater treatment process technologies. Due to the dense biomass on the fixed bed media designed by Khimmaster LLC, the footprint of our fixed bed biological treatment units is much smaller compared to conventional systems.</p>

            <h3>Advantages of the Khimmaster FBBR:</h3>
            <ul>
                <li>Suitable for industrial and municipal wastewater</li>
                <li>Suitable for above or below ground installation</li>
                <li>Low CAPEX</li>
                <li>Plug and play solutions</li>
                <li>Suitable for fluctuating wastewater flows such as underload, overload</li>
                <li>Lower OPEX than any other process technology</li>
                <li>System is capable of being easily expanded with additional modules</li>
                <li>Operation of the plant is possible with minimal training as operation is automatic</li>
                <li>A more compact footprint than other process technologies</li>
                <li>Rapid installation and startup</li>
                <li>High efficiency rate pollutant removal</li>
                <li>Mobile and easy to reposition</li>
                <li>All parts of each module are resistant to corrosion</li>
                <li>Reduced energy costs relative to MBBR and MBR</li>
                <li>No chemicals required</li>
                <li>No odor produced</li>
                <li>Final effluent suitable for reuse</li>
            </ul>

            <h3>Treatment Process:</h3>
            <p>The wastewater from the sewer enters the first tank of the treatment plant for primary clarification. This section serves as an equalizing tank as well provides primary rough screening making sure only organic substances flow further to the main aeration tank. No primary settlement is needed if the wastewater is screened. Wastewater from kitchens in catering businesses is collected separately and fed through a fat separator or other technically suitable equipment (DAF flotation) to reduce the fats, oils and greases (FOG´s), before entering the primary treatment.</p>

            <p>A biological layer (micro-organic colonization) forms on the fixed-bed material after a start-up period. This transforms the organic contaminants contained in the wastewater into sedimentary and mineral substances. This is mainly the work of aerobic organisms. The aeration system installed underneath the fixed-bed material supplies the organisms with sufficient air. In addition, the rising air causes a current that, owing to the geometry of the fixed-bed material used, results in the contents of the tank being completely (horizontally and vertically) mixed (characteristic of an intermixed cylinder).</p>

            <p>The treated wastewater then flows into the sedimentation tank where sludge is settled and then pumped back to the equalizing tank by airlift pumps. In case of excessive levels of sludge, it is pumped to the sludge storage tank where it is further digested using aeration.</p>

            <p>The treated water then flows into the sand filter. Depending on the volumes of the plant, this process can be done both by gravity and by pressurized tanks.</p>

            <p>Finally, the water is disinfected with use of either UV, chlorine or ozone.</p>
            <ImageGallery images={images}/>
        </div>
    );
};

export default SlideOne;