'use client';

interface SocialShareProps {
  url?: string;
  title?: string;
  text?: string;
  layout?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export default function SocialShare({
  url = typeof window !== 'undefined' ? window.location.href : 'https://www.awenenergy.com',
  title = 'Awen Energy - Solar Warranty Recovery',
  text = 'Your Solar System Broke. Your Installer Disappeared. We\'ll Get It Fixed.',
  layout = 'horizontal',
  size = 'md',
  showLabels = false,
}: SocialShareProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
  };

  const socialIcons = [
    {
      name: 'Facebook',
      link: shareLinks.facebook,
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.313-.229-4.425-.229-4.404 0-7.431 2.678-7.431 7.594v1.635z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      link: shareLinks.twitter,
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      link: shareLinks.linkedin,
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'Email',
      link: shareLinks.email,
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      link: shareLinks.whatsapp,
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.903 10.335 1.52 2.402 4.044 3.8 6.946 3.8 1.933 0 3.799-.576 5.41-1.67l.384-.214 3.985 1.044.975-2.828-.2-.31c1.744-2.601 2.539-5.747 1.989-8.956-.743-4.405-4.744-7.577-9.16-7.577" />
        </svg>
      ),
    },
  ];

  const containerClasses =
    layout === 'vertical'
      ? 'flex flex-col items-center gap-3'
      : 'flex flex-row items-center gap-3 justify-center';

  const handleClick = (e: React.MouseEvent, link: string, platform: string) => {
    e.preventDefault();
    // For email, let the default mailto handler work
    if (platform === 'Email') {
      window.location.href = link;
    } else {
      // Open social media share dialog in a new window
      window.open(link, 'share', 'width=600,height=400');
    }
  };

  return (
    <div className={containerClasses}>
      {socialIcons.map((social) => (
        <a
          key={social.name}
          href={social.link}
          onClick={(e) => handleClick(e, social.link, social.name)}
          title={`Share on ${social.name}`}
          className={`
            ${sizeClasses[size]}
            flex items-center justify-center
            rounded-full
            bg-gray-200 hover:bg-primary-500
            text-gray-600 hover:text-white
            transition-all duration-200 ease-in-out
            transform hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          `}
        >
          <div className={iconSizeClasses[size]}>
            {social.icon}
          </div>
          {showLabels && <span className="ml-2 text-sm font-medium">{social.name}</span>}
        </a>
      ))}
    </div>
  );
}
