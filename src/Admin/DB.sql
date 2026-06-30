-- =============================================
-- ELECTRONICS STORE DATABASE - FULL SETUP (Clean & Fixed)
-- =============================================

CREATE DATABASE IF NOT EXISTS electronics_store 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;

USE electronics_store;

-- =============================================
-- 1. Categories Table
-- =============================================
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- 2. Subcategories Table
-- =============================================
CREATE TABLE IF NOT EXISTS subcategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    UNIQUE KEY unique_subcategory_slug (slug)
);

-- =============================================
-- 3. Products Table
-- =============================================
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    sub_category_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2) NULL,
    discount VARCHAR(10) NULL,
    image_url VARCHAR(255),
    stock INT DEFAULT 0,
    popular BOOLEAN DEFAULT FALSE,
    status ENUM('active','inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (sub_category_id) REFERENCES subcategories(id) ON DELETE CASCADE
);

-- =============================================
-- 4. Users Table
-- =============================================
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- INSERT Categories
-- =============================================
INSERT INTO categories (name, slug, description) VALUES 
('Smartphones', 'smartphones', 'Mobile phones and accessories'),
('Laptops', 'laptops', 'Notebook and portable computers'),
('Audio', 'audio', 'Headphones, speakers and audio equipment'),
('TVs & Displays', 'tvs-displays', 'Televisions and monitors'),
('Gaming', 'gaming', 'Gaming consoles, PCs and accessories'),
('Wearables', 'wearables', 'Smartwatches and wearable technology')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug),
    description = VALUES(description);

-- =============================================
-- INSERT Subcategories
-- =============================================
INSERT INTO subcategories (category_id, name, slug, description) VALUES

-- Smartphones
(1, 'Android Smartphones', 'android-smartphones', 'Samsung Galaxy, Google Pixel, Xiaomi, OnePlus, Oppo, Vivo'),
(1, 'iPhones', 'iphones', 'iPhone Standard, Plus, Pro and Pro Max series'),
(1, 'Gaming Smartphones', 'gaming-smartphones', 'ASUS ROG Phone, RedMagic, Black Shark'),
(1, 'Foldable Smartphones', 'foldable-smartphones', 'Samsung Galaxy Z Fold, Z Flip, Google Pixel Fold'),
(1, 'Feature Phones', 'feature-phones', 'Basic keypad, senior-friendly and rugged phones'),

-- Laptops
(2, 'Business Laptops', 'business-laptops', 'Ultrabooks, Enterprise and Productivity laptops'),
(2, 'Gaming Laptops', 'gaming-laptops', 'Entry-level, Mid-range and High-end gaming laptops'),
(2, 'Student & Everyday Laptops', 'student-everyday-laptops', 'Budget, everyday and educational laptops'),
(2, 'Creative & Professional Laptops', 'creative-professional-laptops', 'Graphic design, video editing and workstation laptops'),
(2, '2-in-1 & Convertible Laptops', '2-in-1-convertible-laptops', 'Convertible, detachable and touchscreen laptops'),

-- Audio
(3, 'Headphones & Earphones', 'headphones-earphones', 'Wired, Wireless, TWS Earbuds, Gaming Headsets, Noise Cancelling'),
(3, 'Speakers', 'speakers', 'Bluetooth, Portable, Smart, Bookshelf and Party Speakers'),
(3, 'Home Audio Systems', 'home-audio-systems', 'Home Theater, Soundbars, AV Receivers, Surround Sound'),
(3, 'Professional Audio', 'professional-audio', 'Studio Monitors, Microphones, DJ Equipment, PA Systems'),
(3, 'Car Audio', 'car-audio', 'Car Speakers, Subwoofers, Amplifiers and Head Units'),

-- TVs & Displays
(4, 'Televisions (TVs)', 'televisions', 'LED, OLED, QLED, Smart TVs, 4K/8K Ultra HD'),
(4, 'Monitors', 'monitors', 'Gaming, Office, Curved, Ultrawide and 4K Monitors'),
(4, 'Projectors', 'projectors', 'Home Theater, Business and Portable Projectors'),
(4, 'Digital Displays & Signage', 'digital-displays-signage', 'Commercial screens, interactive displays and kiosks'),
(4, 'TV Accessories & Mounts', 'tv-accessories-mounts', 'Wall mounts, stands, remotes and streaming devices'),

-- Gaming
(5, 'Gaming Consoles', 'gaming-consoles', 'PlayStation, Xbox Series, Nintendo Switch, Retro Consoles'),
(5, 'Gaming PCs & Components', 'gaming-pcs-components', 'Prebuilt PCs, GPUs, CPUs, RAM, Motherboards'),
(5, 'Gaming Peripherals', 'gaming-peripherals', 'Keyboards, Mice, Headsets, Controllers'),
(5, 'Gaming Accessories', 'gaming-accessories', 'VR Headsets, Gaming Chairs, Racing Wheels, RGB Lighting'),
(5, 'Games & Software', 'games-software', 'PC & Console Games, Subscriptions, Gift Cards'),

-- Wearables
(6, 'Smartwatches', 'smartwatches', 'Fitness, Premium, Kids and Hybrid Smartwatches'),
(6, 'Fitness Bands & Trackers', 'fitness-bands-trackers', 'Basic and advanced health monitoring trackers'),
(6, 'Smart Glasses', 'smart-glasses', 'AR Glasses, Audio and Camera Smart Glasses'),
(6, 'Wearable Audio Devices', 'wearable-audio-devices', 'Neckbands, Smart Earbuds, Bone Conduction Headphones'),
(6, 'Wearable Accessories', 'wearable-accessories', 'Smart Rings, Watch Straps, Charging Docks, Cases')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug),
    description = VALUES(description);

-- =============================================
-- Performance Indexes
-- =============================================
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_subcategory ON products(sub_category_id);
CREATE INDEX IF NOT EXISTS idx_products_popular ON products(popular);
CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);
CREATE INDEX IF NOT EXISTS idx_subcategories_category ON subcategories(category_id);

-- =============================================
-- Optional: Sample Product (Uncomment if needed)
-- =============================================
/*
INSERT INTO products (category_id, sub_category_id, name, price, stock, popular, image_url) 
VALUES (1, 1, 'Samsung Galaxy S24 Ultra', 1199.99, 50, 1, '/images/s24-ultra.jpg');
*/

SHOW TABLES;