import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: TextStyle;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = '#000',
  style,
}) => {
  const getIconSymbol = (iconName: string): string => {
    const icons: { [key: string]: string } = {
      // Navigation
      'arrow-left': '←',
      'arrow-right': '→',
      'arrow-up': '↑',
      'arrow-down': '↓',
      'chevron-left': '‹',
      'chevron-right': '›',
      'chevron-up': 'ˆ',
      'chevron-down': 'ˇ',
      
      // Actions
      'plus': '+',
      'minus': '−',
      'close': '×',
      'check': '✓',
      'edit': '✎',
      'delete': '🗑',
      'save': '💾',
      'search': '🔍',
      'filter': '⚙',
      'sort': '⇅',
      
      // UI Elements
      'menu': '☰',
      'more': '⋯',
      'settings': '⚙',
      'info': 'ℹ',
      'warning': '⚠',
      'error': '✕',
      'success': '✓',
      'heart': '♥',
      'star': '★',
      'bookmark': '🔖',
      'share': '↗',
      'download': '⬇',
      'upload': '⬆',
      
      // Media
      'play': '▶',
      'pause': '⏸',
      'stop': '⏹',
      'volume': '🔊',
      'mute': '🔇',
      'camera': '📷',
      'image': '🖼',
      'video': '🎥',
      
      // Social
      'like': '👍',
      'dislike': '👎',
      'comment': '💬',
      'user': '👤',
      'users': '👥',
      'notification': '🔔',
      'message': '💌',
      
      // System
      'home': '🏠',
      'back': '←',
      'forward': '→',
      'refresh': '↻',
      'loading': '⟳',
      'lock': '🔒',
      'unlock': '🔓',
      'eye': '👁',
      'eye-off': '👁‍🗨',
    };

    return icons[iconName] || '?';
  };

  return (
    <Text
      style={[
        styles.icon,
        {
          fontSize: size,
          color,
        },
        style,
      ]}
    >
      {getIconSymbol(name)}
    </Text>
  );
};

// Predefined icon components for common use cases
export const ArrowLeftIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow-left" {...props} />
);

export const ArrowRightIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow-right" {...props} />
);

export const PlusIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="plus" {...props} />
);

export const MinusIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="minus" {...props} />
);

export const CloseIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="close" {...props} />
);

export const CheckIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="check" {...props} />
);

export const SearchIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="search" {...props} />
);

export const SettingsIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="settings" {...props} />
);

export const HeartIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="heart" {...props} />
);

export const StarIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="star" {...props} />
);

export const ShareIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="share" {...props} />
);

export const DownloadIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="download" {...props} />
);

export const PlayIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="play" {...props} />
);

export const PauseIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="pause" {...props} />
);

export const HomeIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="home" {...props} />
);

export const UserIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="user" {...props} />
);

export const NotificationIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="notification" {...props} />
);

export const CameraIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="camera" {...props} />
);

export const ImageIcon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="image" {...props} />
);

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
