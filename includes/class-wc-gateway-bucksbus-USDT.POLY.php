<?php

/**
 * @author   BucksBus
 * @package  WooCommerce BucksBus
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

class BucksBus_Gateway_USDT_POLY extends BucksBus_Gateway_Base
{
	public function __construct()
	{
		parent::__construct('USDT.POLY');
	}
}