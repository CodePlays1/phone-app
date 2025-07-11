import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import GradientButton from '../../components/GradientButton';
import { COLORS } from '../../constants/colors';
import { PRODUCTS } from '../../constants/products';
import { useCart } from '../../context/CartContext';

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(item => item.id === id);

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.dark }}>
        <Text style={{ color: COLORS.light }}>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.dark }}>
      <View style={{ position: 'relative' }}>
        <Image 
          source={product.image} 
          style={{ width: '100%', height: 300, resizeMode: 'contain' }} 
        />
        <TouchableOpacity 
          onPress={() => router.back()}
          style={{ position: 'absolute', top: 40, left: 20 }}
        >
          <Ionicons name="arrow-back" size={30} color={COLORS.light} />
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={[COLORS.dark, COLORS.darker]}
        style={{ padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: COLORS.light, fontSize: 24, fontWeight: 'bold' }}>{product.name}</Text>
          <Text style={{ color: COLORS.primary, fontSize: 24, fontWeight: 'bold' }}>${product.price}</Text>
        </View>

        <Text style={{ color: COLORS.gray, marginTop: 10 }}>{product.brand}</Text>

        <View style={{ marginVertical: 20 }}>
          <Text style={{ color: COLORS.light, fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Specifications</Text>
          <View style={{ backgroundColor: COLORS.darkGray, borderRadius: 10, padding: 15 }}>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Display</Text>
              <Text style={styles.specValue}>{product.specs.display}</Text>
            </View>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Processor</Text>
              <Text style={styles.specValue}>{product.specs.processor}</Text>
            </View>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>RAM</Text>
              <Text style={styles.specValue}>{product.specs.ram}</Text>
            </View>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Storage</Text>
              <Text style={styles.specValue}>{product.specs.storage}</Text>
            </View>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Camera</Text>
              <Text style={styles.specValue}>{product.specs.camera}</Text>
            </View>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Battery</Text>
              <Text style={styles.specValue}>{product.specs.battery}</Text>
            </View>
          </View>
        </View>

        <Text style={{ color: COLORS.light, fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Description</Text>
        <Text style={{ color: COLORS.gray, marginBottom: 30 }}>{product.description}</Text>

        <GradientButton 
          title="Add to Cart" 
          onPress={() => {
            addToCart(product);
            router.push('/cart');
          }} 
        />
      </LinearGradient>
    </ScrollView>
  );
}

const styles = {
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darker,
  },
  specLabel: {
    color: COLORS.gray,
  },
  specValue: {
    color: COLORS.light,
    fontWeight: 'bold',
  },
};