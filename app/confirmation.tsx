import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Confirmation() {
  const router = useRouter();

  const orderId = `#ORD-${Math.floor(Math.random() * 1000000)}`;
  const deliveryDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString();
  const today = new Date().toLocaleDateString();

  return (
    <LinearGradient colors={[COLORS.dark, COLORS.darker]} style={{ flex: 1, padding: 20 }}>
      <Animatable.View animation="fadeInUp" duration={800} style={styles.container}>
        <Animatable.View animation="bounceIn" duration={1000} style={styles.iconContainer}>
          <LinearGradient colors={[COLORS.primary, COLORS.secondary]} style={styles.iconBackground}>
            <Ionicons name="checkmark" size={48} color={COLORS.light} />
          </LinearGradient>
        </Animatable.View>

        <Animatable.Text animation="fadeInDown" delay={300} style={styles.title}>
          Order Confirmed!
        </Animatable.Text>
        <Animatable.Text animation="fadeInDown" delay={400} style={styles.subtitle}>
          Thank you for your purchase
        </Animatable.Text>

        <Animatable.View animation="fadeInUp" delay={500} style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Order Number:</Text>
            <Text style={styles.detailValue}>{orderId}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date:</Text>
            <Text style={styles.detailValue}>{today}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Payment Method:</Text>
            <Text style={styles.detailValue}>Credit Card</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Delivery Estimate:</Text>
            <Text style={styles.detailValue}>{deliveryDate}</Text>
          </View>
        </Animatable.View>

        <Animatable.View animation="zoomInUp" delay={600} style={{ width: '100%' }}>
          <TouchableOpacity onPress={() => router.push('/(tabs)')} style={styles.button}>
            <Text style={styles.buttonText}>Continue Shopping</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.Text animation="fadeIn" delay={800} style={styles.footerText}>
          A confirmation email has been sent to your registered email address
        </Animatable.Text>
      </Animatable.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 30,
  },
  iconBackground: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.light,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.gray,
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: COLORS.darkGray,
    borderRadius: 15,
    padding: 20,
    marginBottom: 40,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailLabel: {
    color: COLORS.gray,
    fontSize: 16,
  },
  detailValue: {
    color: COLORS.light,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: COLORS.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    color: COLORS.gray,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
}); 



