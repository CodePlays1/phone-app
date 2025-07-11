import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';

export default function CartItem({ item, onRemove }) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      
      <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
        <Ionicons name="trash" size={20} color={COLORS.accent} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.darkGray,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  title: {
    color: COLORS.light,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  brand: {
    color: COLORS.gray,
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    padding: 5,
  },
});