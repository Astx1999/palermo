import React, {useState} from 'react';
import {supabase} from '../../supabaseClient';
import styles from './adminPanel.module.scss';
import {SIZE_OPTIONS} from "../../components/products/products";
import CustomSelect from "../../components/customSelect/customSelect";

function AdminPanel() {
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [type, setType] = useState("tile");
    const [size, setSize] = useState("All sizes");
    const [style, setStyle] = useState("");
    const [color, setColor] = useState("");
    const [surface, setSurface] = useState("");
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        try {
            // Upload images to Supabase Storage
            const uploadedUrls = [];

            for (let file of images) {
                const fileExt = file.name.split('.').pop();
                const fileName = `${Date.now()}_${file.name}`;
                const {data, error} = await supabase.storage
                    .from('products')
                    .upload(fileName, file, {
                        cacheControl: '3600',
                        upsert: false
                    });

                if (error) throw error;

                // Get public URL
                const {publicUrl, error: urlError} = supabase.storage
                    .from('products')
                    .getPublicUrl(data.path);

                if (urlError) throw urlError;
                uploadedUrls.push(publicUrl);
            }

            // Insert into products table
            const {data: productData, error: insertError} = await supabase
                .from('products')
                .insert([
                    {
                        title,
                        code,
                        size,
                        price,
                        description,
                        images: uploadedUrls
                    }
                ]);

            if (insertError) throw insertError;

            alert('Product added successfully!');
            // Reset form
            setTitle('');
            setCode('');
            setSize('');
            setPrice('');
            setDescription('');
            setImages([]);
        } catch (err) {
            console.error(err);
            alert('Error uploading product');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Admin Panel - Add Product</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>Title</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Code</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Style</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Style"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Color</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Surface</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Surface"
                        value={surface}
                        onChange={(e) => setSurface(e.target.value)}
                        required
                    />
                </div>

                <CustomSelect value={type} options={["tile", "slab"]} label={"Type:"} onChange={setType}/>
                <CustomSelect value={size} options={SIZE_OPTIONS[type]} label={"Size:"} onChange={setSize}/>

                <div>
                    <label>Price</label>
                    <input
                        className={styles.input}
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <textarea
                    className={styles.input}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    accept="image/*"
                />

                <button className={styles.button} type="submit" disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
}

export default AdminPanel;
