import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';

export default function PhoneCard({ product, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient
        colors={[COLORS.darkGray, COLORS.dark]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image source={product.image} style={styles.image} />
        
        <View style={styles.details}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          
          <View style={styles.specs}>
            <Text style={styles.specText}>{product.ram} RAM</Text>
            <Text style={styles.specText}>{product.storage} Storage</Text>
          </View>
        </View>
        
        <LinearGradient
          colors={[COLORS.primary, COLORS.secondary]}
          style={styles.badge}
        >
          <Text style={styles.badgeText}>{product.brand}</Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  gradient: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    color: COLORS.light,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  specs: {
    flexDirection: 'row',
    gap: 10,
  },
  specText: {
    color: COLORS.gray,
    fontSize: 12,
  },
  badge: {
    position: 'absolute',
    top: 15,
    right: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  badgeText: {
    color: COLORS.light,
    fontSize: 12,
    fontWeight: 'bold',
  },
});