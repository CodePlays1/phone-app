import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CartItem from '../../components/CartItem';
import GradientButton from '../../components/GradientButton';
import { COLORS } from '../../constants/colors';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const router = useRouter();
  const { cart, removeFromCart, clearCart, getTotal } = useCart();

  return (
    <LinearGradient
      colors={[COLORS.dark, COLORS.darker]}
      style={{ flex: 1, padding: 20 }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.light} />
        </TouchableOpacity>
        <Text style={{ color: COLORS.light, fontSize: 24, fontWeight: 'bold', marginLeft: 15 }}>
          Your Cart
        </Text>
      </View>

      {cart.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name="cart-outline" size={60} color={COLORS.gray} />
          <Text style={{ color: COLORS.gray, fontSize: 18, marginTop: 20 }}>
            Your cart is empty
          </Text>
          <GradientButton 
            title="Browse Phones" 
            onPress={() => router.push('/')} 
            style={{ marginTop: 20 }}
          />
        </View>
      ) : (
        <>
          <ScrollView style={{ flex: 1 }}>
            {cart.map((item, index) => (
              <CartItem 
                key={`${item.id}-${index}`}
                item={item}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
          </ScrollView>

          <View style={styles.summary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>${getTotal()}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Shipping</Text>
              <Text style={styles.summaryValue}>Free</Text>
            </View>
            <View style={[styles.summaryRow, { marginTop: 10 }]}>
              <Text style={styles.summaryTotalLabel}>Total</Text>
              <Text style={styles.summaryTotalValue}>${getTotal()}</Text>
            </View>

            <GradientButton 
              title="Checkout" 
  onPress={() => {
    clearCart();
    router.push('/confirmation');
  }} 
              style={{ marginTop: 20 }}
            />
          </View>
        </>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  summary: {
    backgroundColor: COLORS.darkGray,
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    color: COLORS.gray,
    fontSize: 16,
  },
  summaryValue: {
    color: COLORS.light,
    fontSize: 16,
  },
  summaryTotalLabel: {
    color: COLORS.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
  summaryTotalValue: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});