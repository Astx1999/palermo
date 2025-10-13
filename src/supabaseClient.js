import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Optional: helper function to fetch a single product by ID
export async function fetchProductById(id) {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

    if (error) throw error;
    return data;
}

// Optional: helper function to fetch all products
export async function fetchProducts(size) {
    let query = supabase.from('products').select('*');
    if (size && size !== "All sizes") query = query.eq('size', size);

    const { data, error } = await query;
    if (error) throw error;
    return data;
}

