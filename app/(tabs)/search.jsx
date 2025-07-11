import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PhoneCard from '../../components/PhoneCard';
import { COLORS } from '../../constants/colors';
import { PRODUCTS } from '../../constants/products';

export default function Search() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filtered = PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase()) ||
        product.brand.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(PRODUCTS);
    }
  };

  return (
    <LinearGradient
      colors={[COLORS.dark, COLORS.darker]}
      style={{ flex: 1, padding: 20 }}
    >
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.gray} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search phones..."
          placeholderTextColor={COLORS.gray}
          value={searchQuery}
          onChangeText={handleSearch}
          autoCapitalize="none"
        />
        {searchQuery ? (
          <TouchableOpacity onPress={() => {
            setSearchQuery('');
            setFilteredProducts(PRODUCTS);
          }}>
            <Ionicons name="close" size={20} color={COLORS.gray} />
          </TouchableOpacity>
        ) : null}
      </View>

      {filteredProducts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="search-outline" size={60} color={COLORS.gray} />
          <Text style={styles.emptyText}>No results found for "{searchQuery}"</Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={({ item }) => (
            <PhoneCard 
              product={item}
              onPress={() => router.push(`/product/${item.id}`)}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </LinearGradient>
  );
}

const styles = {
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.darkGray,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: COLORS.light,
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: COLORS.gray,
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
};