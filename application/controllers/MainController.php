<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MainController extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->helper(array('url'));
	}

	public function index()
	{
		$this->load->view('index_page/header');
		$this->load->view('index_page/the_light');
		$this->load->view('index_page/footer');
	}
}