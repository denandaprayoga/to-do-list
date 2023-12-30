export default function Footer({ gloceryItems }) {
  if (gloceryItems.length === 0)
    return <footer className='stats'>Daftar belanja masih kosong!</footer>;

  const totalItems = gloceryItems.length;
  const checkedItems = gloceryItems.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className='stats'>
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percentage}%)
    </footer>
  );
}
