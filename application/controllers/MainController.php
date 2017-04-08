<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MainController extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->helper(array('url'));
		$this->load->model('Index');
	}

	public function index()
	{
		$gen = $this->Index->genPageType();

		$data['title'] = 'index';
		$data['css'] = $gen['type'];
		$data['js'] = $gen['type'];
		$data['variation'] = $gen['variation'];

		$this->load->view('index_page/header', $data);
		$this->load->view('index_page/'.$gen['type']);
		$this->load->view('index_page/footer');
	}
}