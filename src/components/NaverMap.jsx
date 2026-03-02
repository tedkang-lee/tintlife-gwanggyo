/**
 * Google Maps iframe 임베드 컴포넌트 (API 키 불필요)
 */
export default function NaverMap({ address }) {
  const query = encodeURIComponent(address)
  const src = `https://maps.google.com/maps?q=${query}&output=embed&hl=ko&z=17`

  return (
    <iframe
      src={src}
      title={address}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
